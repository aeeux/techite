import Link from 'next/link'
import s from './MenuSidebarView.module.css'
import { useUI } from '@components/ui/context'
import SidebarLayout from '@components/common/SidebarLayout'
import type { Link as LinkProps } from './index'
import { Logo, Container } from '@components/ui'

export default function MenuSidebarView({
  links = [],
}: {
  links?: LinkProps[]
}) {
  const { closeSidebar } = useUI()

  return (
    <SidebarLayout handleClose={() => closeSidebar()}>
      <div className="mx-8 my-12">
        <nav>
          <ul>
            <li
              className="font-semibold text-xl space-y-10"
              onClick={() => closeSidebar()}
            >
              <Link href="/search">
                <a className="flex">Produkter</a>
              </Link>
              <Link href="/about">
                <a className="flex">Om os</a>
              </Link>
              <Link href="/kontakt">
                <a className="flex">Kontakt</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </SidebarLayout>
  )
}

MenuSidebarView
