"use client";
import { ReactNode } from 'react'
import './MenuItem.scss'

import {RiBold} from '@remixicon/react'

export default function MenuItem ({
  icon, title, action, isActive = null,
}: {icon?: ReactNode, title?: string, action?: () => void, isActive?: (() => boolean) | null } ) {
  return <button
      className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
      onClick={action}
      title={title}
    >
      {icon}
    </button>
}
