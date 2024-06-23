import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BankCard = ({account, userName, showBalance} : CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link href='/' className='bank-card'>
            <div className='bank-card_content'>
                <div>
                    <h1 className='text-white text-16 font-semibold'>
                        {account.name || userName}
                    </h1>
                    <p className='font-ibm-plex-serif font-black text-white'>
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>

                <article className='flex flex-col gap-2'>
                    <div className='flex justify-between'>
                        <h1 className='text-12 text-white font-semibold'>
                            {userName}
                        </h1>
                        <h2 className='text-12 text-white font-semibold'>
                            &#x2022;&#x2022; / &#x2022;&#x2022;
                        </h2>
                    </div>
                    <p className='text-14 text-white font-semibold tracking-[1.1]px'>
                    &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; 
                    &#x2022;&#x2022;&#x2022;&#x2022; <span className='text-16'>1234</span>
                    </p>
                </article>
            </div>

            <div className='bank-card_icon'>
                    <Image
                        alt='pay' 
                        width={20}
                        height={24}
                        src='/icons/Paypass.svg'
                    />
                    <Image
                        alt='mastercard' 
                        width={45}
                        height={32}
                        src='/icons/mastercard.svg'
                        className='ml-5'
                    />
                </div>
        </Link>
    </div>
  )
}

export default BankCard