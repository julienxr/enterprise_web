import {
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineStock,
} from 'react-icons/ai';

import { FiEdit, FiPieChart } from 'react-icons/fi';

import { BsBarChart, BsDot, BsKanban } from 'react-icons/bs';

import React, { ReactNode } from 'react';
import { BiColorFill } from 'react-icons/bi';
import { GiLouvrePyramid } from 'react-icons/gi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';

export const links = [
  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: (color: string): ReactNode => (
          <AiOutlineShoppingCart className={`${color}`} />
        ),
        subcategory: [
          {
            name: 'example 1',
            icon: (color: string): ReactNode => (
              <BsDot className={`${color}`} />
            ),
          },
          {
            name: 'example 2',
            icon: (color: string): ReactNode => (
              <BsDot className={`${color}`} />
            ),
          },
          {
            name: 'example 3',
            icon: (color: string): ReactNode => (
              <BsDot className={`${color}`} />
            ),
          },
        ],
      },
      {
        name: 'employees',
        icon: (color: string): ReactNode => (
          <IoMdContacts className={`${color}`} />
        ),
        subcategory: [
          {
            name: 'example 4',
            icon: (color: string): ReactNode => (
              <BsDot className={`${color}`} />
            ),
          },
        ],
      },
      {
        name: 'customers',
        icon: (color: string): ReactNode => (
          <RiContactsLine className={`${color}`} />
        ),
        subcategory: [],
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: (color: string): ReactNode => (
          <AiOutlineCalendar className={`${color}`} />
        ),
        subcategory: [
          {
            name: 'example 5',
            icon: (color: string): ReactNode => (
              <BsDot className={`${color}`} />
            ),
          },
        ],
      },
      {
        name: 'kanban',
        icon: (color: string): ReactNode => <BsKanban className={`${color}`} />,
        subcategory: [],
      },
      {
        name: 'editor',
        icon: (color: string): ReactNode => <FiEdit className={`${color}`} />,
        subcategory: [],
      },
      {
        name: 'color-picker',
        icon: (color: string): ReactNode => (
          <BiColorFill className={`${color}`} />
        ),
        subcategory: [],
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: (color: string): ReactNode => (
          <AiOutlineStock className={`${color}`} />
        ),
        subcategory: [],
      },
      {
        name: 'area',
        icon: (color: string): ReactNode => (
          <AiOutlineAreaChart className={`${color}`} />
        ),
        subcategory: [],
      },

      {
        name: 'bar',
        icon: (color: string): ReactNode => (
          <AiOutlineBarChart className={`${color}`} />
        ),
        subcategory: [],
      },
      {
        name: 'pie',
        icon: (color: string): ReactNode => (
          <FiPieChart className={`${color}`} />
        ),
        subcategory: [],
      },
      {
        name: 'financial',
        icon: (color: string): ReactNode => (
          <RiStockLine className={`${color}`} />
        ),
        subcategory: [],
      },
      {
        name: 'color-mapping',
        icon: (color: string): ReactNode => (
          <BsBarChart className={`${color}`} />
        ),
        subcategory: [],
      },
      {
        name: 'pyramid',
        icon: (color: string): ReactNode => (
          <GiLouvrePyramid className={`${color}`} />
        ),
        subcategory: [],
      },
      {
        name: 'stacked',
        icon: (color: string): ReactNode => (
          <AiOutlineBarChart className={`${color}`} />
        ),
        subcategory: [],
      },
    ],
  },
];
