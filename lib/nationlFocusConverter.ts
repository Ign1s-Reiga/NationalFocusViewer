import { Db, MongoClient } from 'mongodb';

export interface INationalFocusTree {
    id: string
    focuses: INationalFocus[]
}
export interface INationalFocus {
    id: string
    title: translatePare
    desc: translatePare
    memo: string
    icon: string | null
    cost: number
    x: number
    y: number
    relativePositionId: INationalFocus | null
    prerequisite: INationalFocus[] | null
    mutuallyExclusive: INationalFocus[] | null
    searchFilters: string[]
    aiWillDo: {factor: number, modifier: {}}
    completeReward: string
    completeTooltip: string
}
type translatePare = {
    key: string,
    value: string
}
export const searchFilters = {
    POLITICAL: { key: 'FOCUS_FILTER_POLITICAL', value: '政治' },
    RESEARCH: { key: 'FOCUS_FILTER_RESEARCH', value: '研究' },
    INDUSTRY: { key: 'FOCUS_FILTER_INDUSTRY', value: '産業' },
    STABILITY: { key: 'FOCUS_FILTER_STABILITY', value: '安定度' },
    WAR_SUPPORT: { key: 'FOCUS_FILTER_WAR_SUPPORT', value: '戦争協力度' },
    FRA_POLITICAL_VIOLENCE: { key: 'FOCUS_FILTER_FRA_POLITICAL_VIOLENCE', value: '政治的暴力' },
    FRA_OCCUPATION_COST: { key: 'FOCUS_FILTER_FRA_OCCUPATION_COST', value: '占領コスト' },
    ANNEXATION: { key: 'FOCUS_FILTER_ANNEXATION', value: '併合' },
    MANPOWER: { key: 'FOCUS_FILTER_POLITICAL', value: '政治' },
    CHI_INFLATION: { key: 'FOCUS_FILTER_CHI_INFLATION', value: 'インフレーション' },
    USA_CONGRESS: { key: 'FOCUS_FILTER_USA_CONGRESS', value: '議会' },
    TFV_AUTONOMY: { key: 'FOCUS_FILTER_TFV_AUTONOMY', value: '自治度' },
    MEX_CHURCH_AUTHORITY: { key: 'FOCUS_FILTER_MEX_CHURCH_AUTHORITY', value: '教会の権威' },
    MEX_CAUDILLO_REBELLION: { key: 'FOCUS_FILTER_MEX_CAUDILLO_REBELLION', value: 'カウディーリョの反乱' },
    SPA_CIVIL_WAR: { key: 'FOCUS_FILTER_SPA_CIVILWAR', value: 'スペイン内戦' },
    SPA_CARLIST_UPRISING: { key: 'FOCUS_FILTER_CARLIST', value: 'カルリスタ蜂起' },
    INTERNAL_AFFAIRS: { key: 'FOCUS_FILTER_INTERNAL_AFFAIRS', value: '国内問題' },
    GRE_DEBT_TO_IFC: { key: 'FOCUS_FILTER_GRE_DEBT_TO_IFC', value: 'I.F.C.への債務' },
    TUR_KURDISTAN: { key: 'FOCUS_FILTER_TUR_KURDISTAN', value: 'クルディスタン' },
    TUR_KEMALISM: { key: 'FOCUS_FILTER_TUR_KEMALISM', value: 'ケマル主義' },
    TUR_TRADITIONALISM: { key: 'FOCUS_FILTER_TUR_TRADITIONALISM', value: '伝統主義' },
    SOV_POLITICAL_PARANOIA: { key: 'FOCUS_FILTER_SOV_POLITICAL_PARANOIA', value: '政治的パラノイア' },
    PROPAGANDA: { key: 'FOCUS_FILTER_PROPAGANDA', value: 'プロパガンダ' },
    ARMY_XP: { key: 'FOCUS_FILTER_POLITICAL', value: '陸軍経験値' },
    NAVY_XP: { key: 'FOCUS_FILTER_POLITICAL', value: '海軍経験値' },
    AIR_XP: { key: 'FOCUS_FILTER_POLITICAL', value: '空軍経験値' }
}
export class NFConverter {
    client: MongoClient
    db: Db

    constructor() {
        assertIsString(process.env.MONGODB_URL)
        this.client = new MongoClient(process.env.MONGODB_URL)
        this.db = this.client.db('nfv')
    }
    convert() {

    }
    export() {}
}
function assertIsString(a: any): asserts a is string {
    if (typeof a !== 'string')
        throw new Error('Not a String')
}
