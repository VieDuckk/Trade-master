'use client'

import { HeaderBase } from './HeaderBase'
import { useTranslation } from '../../../i18n/client'
// import { useParams } from 'next/navigation'

export function Header({ lng, path }: {
  lng: string;
  path: string;
}) {
  const { i18n } = useTranslation(lng, 'header')
  return <HeaderBase i18n={i18n} lng={lng} path={path} />
}