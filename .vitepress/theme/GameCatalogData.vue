<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

interface StructureLevel {
  vehicleCapacity: number
  employeeCapacity: number
  moneyCost: number
  goldCost: number
  seconds: number
}

interface CatalogStructure {
  id: string
  name: string
  availableForPurchase: boolean
  maxLevel: number
  levels: Record<string, StructureLevel>
}

interface GameCatalog {
  startingBalance: { money: number; gold: number }
  structures: CatalogStructure[]
  incidentGenerationIntervalMinutes: { min: number; max: number }
  rules: { detentionUpgradeCost: number; detentionUpgradeSeconds: number }
}

type Section = 'starting-balance' | 'construction-costs' | 'upgrade-levels' | 'detention' | 'incident-cadence'

const props = defineProps<{ section: Section }>()
const catalog = ref<GameCatalog | null>(null)
const loading = ref(true)
const error = ref(false)
let catalogRequest: Promise<GameCatalog> | null = null

const apiBase = (import.meta.env.VITE_GAME_API_BASE ?? '').replace(/\/$/, '')
const apiUrl = `${apiBase}/api/v1/game/catalog`

const upgradeRows = computed(() => catalog.value?.structures.flatMap((structure) =>
  Object.entries(structure.levels)
    .filter(([level]) => Number(level) > 1)
    .map(([level, values]) => ({ structure, level: Number(level), values })),
) ?? [])

async function fetchCatalog(): Promise<GameCatalog> {
  if (!catalogRequest) {
    catalogRequest = fetch(apiUrl, { cache: 'no-store' })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Catálogo indisponível (${response.status}).`)
        return await response.json() as GameCatalog
      })
      .catch((reason: unknown) => {
        catalogRequest = null
        throw reason
      })
  }
  return catalogRequest
}

async function loadCatalog() {
  loading.value = true
  error.value = false
  try {
    catalog.value = await fetchCatalog()
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

function formatMoney(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
}

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  if (minutes && remainingSeconds) return `${minutes} min ${remainingSeconds} s`
  if (minutes === 1) return '1 minuto'
  if (minutes) return `${minutes} minutos`
  return `${seconds} segundos`
}

function formatGold(value: number) {
  if (!value) return '—'
  return `${value} ${value === 1 ? 'ouro' : 'ouros'}`
}

function formatStartingGold(value: number) {
  return `${value} ${value === 1 ? 'ouro' : 'ouros'}`
}

onMounted(() => void loadCatalog())
</script>

<template>
  <div class="game-catalog-data" aria-live="polite">
    <p v-if="loading" class="game-catalog-data__status">Carregando valores atuais do jogo…</p>
    <div v-else-if="error" class="game-catalog-data__error" role="alert">
      <span>Não foi possível consultar o catálogo agora.</span>
      <button type="button" @click="void loadCatalog()">Tentar novamente</button>
    </div>
    <template v-else-if="catalog">
      <dl v-if="props.section === 'starting-balance'" class="game-catalog-data__balance">
        <div>
          <dt>Dinheiro inicial</dt>
          <dd>{{ formatMoney(catalog.startingBalance.money) }}</dd>
        </div>
        <div>
          <dt>Ouro inicial</dt>
          <dd>{{ formatStartingGold(catalog.startingBalance.gold) }}</dd>
        </div>
      </dl>

      <div v-else-if="props.section === 'construction-costs'" class="game-catalog-data__table-wrap">
        <table class="game-catalog-data__table">
          <thead><tr><th>Unidade</th><th>Dinheiro</th><th>Ouro</th><th>Tempo</th></tr></thead>
          <tbody>
            <tr v-for="structure in catalog.structures.filter((item) => item.availableForPurchase)" :key="structure.id">
              <th scope="row">{{ structure.name }}</th>
              <td>{{ formatMoney(structure.levels['1'].moneyCost) }}</td>
              <td>{{ formatGold(structure.levels['1'].goldCost) }}</td>
              <td>{{ formatDuration(structure.levels['1'].seconds) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else-if="props.section === 'upgrade-levels'" class="game-catalog-data__table-wrap">
        <table class="game-catalog-data__table game-catalog-data__table--upgrades">
          <thead><tr><th>Unidade</th><th>Nível</th><th>Dinheiro</th><th>Ouro</th><th>Tempo</th><th>Viaturas</th><th>Funcionários</th></tr></thead>
          <tbody>
            <tr v-for="row in upgradeRows" :key="`${row.structure.id}-${row.level}`">
              <th scope="row">{{ row.structure.name }}</th>
              <td>{{ row.level }}</td>
              <td>{{ formatMoney(row.values.moneyCost) }}</td>
              <td>{{ formatGold(row.values.goldCost) }}</td>
              <td>{{ formatDuration(row.values.seconds) }}</td>
              <td>{{ row.values.vehicleCapacity || '—' }}</td>
              <td>{{ row.values.employeeCapacity }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p v-else-if="props.section === 'detention'" class="game-catalog-data__rule">
        Instalação da carceragem: <strong>{{ formatMoney(catalog.rules.detentionUpgradeCost) }}</strong> ·
        <strong>{{ formatDuration(catalog.rules.detentionUpgradeSeconds) }}</strong>
      </p>

      <p v-else-if="props.section === 'incident-cadence'" class="game-catalog-data__rule">
        Para jogadores ativos com bases operacionais, novos chamados aparecem em intervalos aleatórios de
        <strong>{{ catalog.incidentGenerationIntervalMinutes.min }} a {{ catalog.incidentGenerationIntervalMinutes.max }} minutos</strong>.
      </p>
    </template>
  </div>
</template>

<style scoped>
.game-catalog-data {
  margin: 18px 0 26px;
}

.game-catalog-data__status,
.game-catalog-data__error,
.game-catalog-data__rule {
  margin: 0;
  padding: 16px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.game-catalog-data__status {
  color: var(--vp-c-text-2);
}

.game-catalog-data__error {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--vp-c-text-2);
}

.game-catalog-data__error button {
  padding: 7px 11px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-brand-1);
  cursor: pointer;
  font: inherit;
  font-weight: 600;
}

.game-catalog-data__error button:hover {
  background: var(--vp-c-brand-soft);
}

.game-catalog-data__balance {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 0;
}

.game-catalog-data__balance > div {
  display: grid;
  gap: 5px;
  padding: 16px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.game-catalog-data__balance dt {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.game-catalog-data__balance dd {
  margin: 0;
  color: var(--vp-c-brand-1);
  font-size: 21px;
  font-weight: 700;
}

.game-catalog-data__table-wrap {
  overflow-x: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.game-catalog-data__table {
  width: 100%;
  min-width: 570px;
  margin: 0 !important;
  border-collapse: collapse;
}

.game-catalog-data__table--upgrades {
  min-width: 790px;
}

.game-catalog-data__table th,
.game-catalog-data__table td {
  padding: 12px 14px !important;
  border: 0 !important;
  border-bottom: 1px solid var(--vp-c-divider) !important;
  text-align: left;
  white-space: nowrap;
}

.game-catalog-data__table thead th {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 650;
}

.game-catalog-data__table tbody tr:last-child th,
.game-catalog-data__table tbody tr:last-child td {
  border-bottom: 0 !important;
}

.game-catalog-data__table tbody th {
  font-weight: 600;
}

@media (max-width: 640px) {
  .game-catalog-data__balance {
    grid-template-columns: 1fr;
  }
}
</style>
