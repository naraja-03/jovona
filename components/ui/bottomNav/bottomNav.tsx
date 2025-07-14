import React, { useState } from 'react';
import { Home, MessageCircle, Plus, Activity, MoreHorizontal, User, Settings, Edit } from 'lucide-react';
import clsx from 'clsx';
import { BottomNavKey, FIXED_POSITIONS } from './constants';

const ICONS = [
  { key: BottomNavKey.Dashboard, icon: Home, fixed: true },
  { key: BottomNavKey.Message, icon: MessageCircle },
  { key: BottomNavKey.Plus, icon: Plus, fixed: true },
  { key: BottomNavKey.Activity, icon: Activity },
  { key: BottomNavKey.More, icon: MoreHorizontal, fixed: true },
];

const EXPANDED_ICONS = [
  ...ICONS,
  { key: BottomNavKey.Profile, icon: User },
  { key: BottomNavKey.Settings, icon: Settings },
];

const NAV_BG = 'bg-[#222]';
const ICON_COLOR = 'text-gray-400';
const ICON_ACTIVE = 'text-blue-500';
const ICON_SIZE = 28;

export default function BottomNavPage() {
  const [active, setActive] = useState(BottomNavKey.Dashboard);
  const [expanded, setExpanded] = useState(false);
  const [icons] = useState(ICONS);
  const [editMode, setEditMode] = useState(false);

  const handleIconClick = (key: BottomNavKey) => {
    if (key === BottomNavKey.More) {
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
      if (
        item.fixed &&
        Object.prototype.hasOwnProperty.call(FIXED_POSITIONS, item.key)
      ) {
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
            onClick={() => handleIconClick(item.key as BottomNavKey)}
            style={{ background: 'none' }}
          >
            <item.icon size={ICON_SIZE} />
          </button>
        ))}
      </div>
      {expanded && (
        <div className="mt-4 flex gap-6">
          <button
            className={clsx('p-2 rounded-full', active === BottomNavKey.Profile ? ICON_ACTIVE : ICON_COLOR)}
            onClick={() => setActive(BottomNavKey.Profile)}
            style={{ background: 'none' }}
          >
            <User size={ICON_SIZE} />
          </button>
          <button
            className={clsx('p-2 rounded-full', active === BottomNavKey.Settings ? ICON_ACTIVE : ICON_COLOR)}
            onClick={() => setActive(BottomNavKey.Settings)}
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
