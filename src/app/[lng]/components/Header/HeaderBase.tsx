import { i18n } from 'i18next'
import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../../i18n/settings'

export const HeaderBase = ({ i18n, lng, path = '' }: { i18n: i18n, lng: string, path?: string }) => {
    const t = i18n.getFixedT(lng, 'header')
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <Trans i18nKey="languageSwitcher" t={t}>
        {/* @ts-expect-error Trans interpolation */}
        Switch from <strong>{{lng}}</strong> to:{' '}
      </Trans>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            <Link href={`/${l}${path}`}>
              {l}
            </Link>
          </span>
        )
      })}
    </div>
  )
}
