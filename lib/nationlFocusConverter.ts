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
    POLITICAL: 'FOCUS_FILTER_POLITICAL',
    RESEARCH: 'FOCUS_FILTER_RESEARCH',
    INDUSTRY: 'FOCUS_FILTER_INDUSTRY',
    STABILITY: 'FOCUS_FILTER_STABILITY',
    WAR_SUPPORT: 'FOCUS_FILTER_WAR_SUPPORT',
    MANPOWER: 'FOCUS_FILTER_MANPOWER',
    ANNEXATION: 'FOCUS_FILTER_ANNEXATION',
    SOV_POLITICAL_PARANOIA: 'FOCUS_FILTER_SOV_POLITICAL_PARANOIA',
    PROPAGANDA: 'FOCUS_FILTER_PROPAGANDA',
    SPA_CIVIL_WAR: 'FOCUS_SPA_FILTER_CIVIL_WAR',
    SPA_CARLIST_UPRISING: 'FOCUS_FILTER_SPA_CARLIST_UPRISING',
    ARMY_XP: 'FOCUS_FILTER_ARMY_XP',
    NAVY_XP: 'FOCUS_FILTER_NAVY_XP',
    AIR_XP: 'FOCUS_FILTER_AIR_XP'
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
}
function assertIsString(a: any): asserts a is string {
    if (typeof a !== 'string')
        throw new Error('Not a String')
}
