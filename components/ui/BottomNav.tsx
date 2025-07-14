import React, { useState } from 'react';
import { Home, MessageCircle, Plus, Activity, MoreHorizontal, User, Settings, Edit } from 'lucide-react';
import clsx from 'clsx';

const ICONS = [
  { key: 'dashboard', icon: Home, fixed: true },
  { key: 'message', icon: MessageCircle },
  { key: 'plus', icon: Plus, fixed: true },
  { key: 'activity', icon: Activity },
  { key: 'more', icon: MoreHorizontal, fixed: true },
];

const EXPANDED_ICONS = [
  ...ICONS,
  { key: 'profile', icon: User },
  { key: 'settings', icon: Settings },
];

const FIXED_POSITIONS = {
  dashboard: 0,
  plus: 2,
  more: 4,
};

const NAV_BG = 'bg-[#222]';
const ICON_COLOR = 'text-gray-400';
const ICON_ACTIVE = 'text-blue-500';
const ICON_SIZE = 28;

export default function BottomNav() {
  const [active, setActive] = useState('dashboard');
  const [expanded, setExpanded] = useState(false);
  const [icons, setIcons] = useState(ICONS); // This line is unchanged
  const [editMode, setEditMode] = useState(false);

  const handleIconClick = (key: string) => {
    if (key === 'more') {
      setExpanded((e) => !e);
    } else {
      setActive(key);
      setExpanded(false);
    }
  };

  // Render icons with fixed positions
  const renderIcons = (iconList: typeof ICONS) => {
    const arr = Array(5).fill(null);
    iconList.forEach((item) => {
      if (item.fixed && FIXED_POSITIONS[item.key] !== undefined) {
        arr[FIXED_POSITIONS[item.key]] = item;
      }
    });
    // Fill remaining slots
    let idx = 0;
    iconList.forEach((item) => {
      if (!item.fixed) {
        while (arr[idx]) idx++;
        arr[idx] = item;
      }
    });
    return arr;
  };

  return (
    <nav
      className={clsx(
        'fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center',
        NAV_BG,
        expanded ? 'pb-8 pt-4' : 'py-2'
      )}
    >
      <div className="w-full flex justify-between items-center px-4 mb-2">
        <span className="text-xs text-gray-500 cursor-pointer" onClick={() => setEditMode((e) => !e)}>
          <Edit size={16} className="inline mr-1" /> Edit
        </span>
        {expanded && (
          <span className="relative">
            <MoreHorizontal size={18} className="text-blue-500" />
            <span className="absolute -top-1 -right-2 w-3 h-3 bg-blue-500 rounded-full border border-white" />
          </span>
        )}
      </div>
      <div
        className={clsx(
          'flex',
          expanded ? 'flex-col gap-4 items-center' : 'flex-row gap-8 justify-center'
        )}
      >
        {(expanded ? EXPANDED_ICONS : renderIcons(icons)).map((item) => (
          <button
            key={item.key}
            className={clsx(
              'p-2 rounded-full transition-colors',
              active === item.key ? ICON_ACTIVE : ICON_COLOR,
              'hover:text-blue-400'
            )}
            onClick={() => handleIconClick(item.key)}
            style={{ background: 'none' }}
          >
            <item.icon size={ICON_SIZE} />
          </button>
        ))}
      </div>
      {expanded && (
        <div className="mt-4 flex gap-6">
          <button
            className={clsx('p-2 rounded-full', active === 'profile' ? ICON_ACTIVE : ICON_COLOR)}
            onClick={() => setActive('profile')}
            style={{ background: 'none' }}
          >
            <User size={ICON_SIZE} />
          </button>
          <button
            className={clsx('p-2 rounded-full', active === 'settings' ? ICON_ACTIVE : ICON_COLOR)}
            onClick={() => setActive('settings')}
            style={{ background: 'none' }}
          >
            <Settings size={ICON_SIZE} />
          </button>
        </div>
      )}
      {editMode && (
        <div className="absolute top-0 right-0 bg-[#222] p-4 rounded shadow-lg text-gray-300">
          <div className="mb-2 font-bold">Edit Icons</div>
          <div className="flex gap-2">
            {ICONS.map((item) => (
              <span key={item.key} className="flex flex-col items-center">
                <item.icon size={20} />
                <span className="text-xs">{item.key}</span>
              </span>
            ))}
          </div>
          <div className="mt-2 text-xs">Drag to reorder (not implemented)</div>
        </div>
      )}
    </nav>
  );
}
