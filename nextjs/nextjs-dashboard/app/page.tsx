import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from "@/app/ui/home.module.css";
import { lusitana } from './ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* 구성 <Image>요소는 HTML 태그의 확장 <img>이며 다음과 같은 자동 이미지 최적화 기능을 제공합니다.
          이미지가 로드될 때 자동으로 레이아웃 이동을 방지합니다.
          뷰포트가 더 작은 장치에 큰 이미지가 전달되는 것을 방지하기 위해 이미지 크기를 조정합니다.
          기본적으로 이미지 지연 로딩(이미지가 뷰포트에 들어갈 때 로드됨) */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className='hidden md:block'
            alt='Screenshots of the dashboard project showing desktop version'
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className='block md:hidden'
            alt='Screenshots of the dashboard project showing mobile version'
          />
        </div>
      </div>
    </main>
  );
}
