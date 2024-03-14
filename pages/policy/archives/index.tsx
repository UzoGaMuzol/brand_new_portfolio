import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Std.module.css'
import Return from '@/src/Return'
import { licensesVersionMap } from '@/src/licenses/License'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Policy() {
  return (
    <>
      <Head>
        <title>過去のライセンス一覧</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        <article>
          <h1>過去のライセンス一覧</h1>
          <ul>
            {
              Array.from(licensesVersionMap.keys()).map((version: string) => {
                return (
                  <li key={version}>
                    <Link
                      href={`/policy/archives/${version}`}
                    >
                      v{version}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </article>
        <Return />
      </main>
    </>
  )
}
