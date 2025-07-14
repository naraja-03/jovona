export enum BottomNavKey {
  Dashboard = 'dashboard',
  Message = 'message',
  Plus = 'plus',
  Activity = 'activity',
  More = 'more',
  Profile = 'profile',
  Settings = 'settings',
}

export const FIXED_POSITIONS: Record<BottomNavKey, number> = {
  [BottomNavKey.Dashboard]: 0,
  [BottomNavKey.Plus]: 2,
  [BottomNavKey.More]: 4,
  [BottomNavKey.Message]: 1,
  [BottomNavKey.Activity]: 3,
  [BottomNavKey.Profile]: 5,
  [BottomNavKey.Settings]: 6,
};
