export interface ISettings {
    FOCUS_POINT_DAYS: number
    TILED_BACKGROUND: string
    TILED_FOCUS_BACKGROUND: string
}
export const defaultSettings = (): ISettings => ({
    FOCUS_POINT_DAYS: 7,
    TILED_BACKGROUND: '/tiled_bg.png',
    TILED_FOCUS_BACKGROUND: '/tiled_focus_bg.png'
})
