import React from 'react'
import { FaCat, FaDog, FaKiwiBird, FaSpider, FaBug, FaHorse, FaOtter } from "react-icons/fa";
import { AiOutlineHome } from 'react-icons/ai'
import { BsPeopleFill } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'

export const topics = [
  {
    name: 'cats',
    icon: <FaCat />,
  },
  {
    name: 'dogs',
    icon: <FaDog />,
  },
  {
    name: 'birds',
    icon: <FaKiwiBird />,
  },
  {
    name: 'spiders',
    icon: <FaSpider />,
  },
  {
    name: 'bugs',
    icon: <FaBug />,
  },
  {
    name: 'horses',
    icon: <FaHorse />,
  },
  {
    name: 'reptilias',
    icon: <FaOtter />,
  },
];

export const navigation = [
    {
        name: 'For You',
        href: '/',
        icon: <AiOutlineHome />
    },
    {
        name: 'Following',
        href: '/following',
        icon: <BsPeopleFill />
    },
    {
        name: 'Explore',
        href: '/explore',
        icon: <MdOutlineExplore />
    }
]

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Carrers', 'ByteDance', 'Creator Directory']
export const footerList2 = [ 'TikTik for Good','Advertise','Developers','Transparency','TikTik Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines' ]