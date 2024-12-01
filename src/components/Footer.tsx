import { footerMenu } from '@/content/footer';
import { footerItem } from '@/types/footer';
import SimpleDropdown from '@/utils/SimpleDropdwon';
import Link from 'next/link'
import React, { useState } from 'react'

export default function Footer() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const options: any[] = [
        {
            value: 'English',
            label: 'English'
        },
        {
            value: 'Hindi',
            label: 'Hindi'
        },
        {
            value: 'Sindhi',
            label: 'Sindhi'
        },
    ]
    return (
        <div className=' bg-primary w-full  md:px-8  px-4 pt-8 pb-4'>
            <div className='flex md:flex-row flex-col md:space-y-2 space-y-5 items-start justify-between w-full'>
                <div className=' w-full md:w-1/4 flex flex-col justify-start items-start'>
                    <img src="/logo/footerLogo.svg" className=' h-16' alt="" />
                    <p className=' md:mt-3 mt-3 text-paragraphLight text-[14px]  font-medium'>Sindhi Books Info is dedicated to preserving and celebrating the vibrant literary heritage of Sindhi culture.</p>

                    <div className='md:mt-5 mt-2  md:w-1/2 w-full'>
                        <SimpleDropdown selectedOption={selectedOption} title='Languages' options={options} handleChange={handleChange} />
                    </div>
                </div>
                <div className=' flex mt-5 md:mt-0  md:w-2/4 w-full'>
                    <div className=' w-full flex  flex-col space-y-2 md:pt-8'>

                        {

                            footerMenu.slice(0, 3).map((item: footerItem, index: number) => (
                                <Link href={item.link} key={index} className=' md:text-right text-white font-medium text-[16px]'>{item.title}</Link>
                            ))
                        }
                    </div>
                    <div className='w-full flex  flex-col space-y-2 md:pt-8'>

                        {

                            footerMenu.slice(3, 7).map((item: footerItem, index: number) => (
                                <Link href={item.link} key={index} className=' md:text-right text-white font-medium text-[16px]'>{item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className=' w-full md:w-1/4 flex flex-col space-y-2 md:pt-8   md:mt-0   md:pl-32'>
                    <p className=' text-white text-sm'>Follow us on Social Media:</p>
                    <div className=' flex space-x-3'>
                        <Link className=' text-white' href={''}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.5 0 0 4.49 0 10.02C0 15.02 3.66 19.17 8.44 19.92V12.92H5.9V10.02H8.44V7.81C8.44 5.3 9.93 3.92 12.22 3.92C13.31 3.92 14.45 4.11 14.45 4.11V6.58H13.19C11.95 6.58 11.56 7.35 11.56 8.14V10.02H14.34L13.89 12.92H11.56V19.92C13.9164 19.5478 16.0622 18.3455 17.6099 16.5301C19.1576 14.7146 20.0054 12.4056 20 10.02C20 4.49 15.5 0 10 0Z" fill="white" />
                        </svg>
                        </Link>
                        <Link href={''} className=' text-white'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="white" />
                            </svg>
                        </Link>
                        <Link href={''} className='text-white'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z" fill="white" />
                            </svg>

                        </Link>
                        <Link href={''} className=' text-white'>
                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.92 2C20.15 2.35 19.32 2.58 18.46 2.69C19.34 2.16 20.02 1.32 20.34 0.31C19.51 0.81 18.59 1.16 17.62 1.36C16.83 0.5 15.72 0 14.46 0C12.11 0 10.19 1.92 10.19 4.29C10.19 4.63 10.23 4.96 10.3 5.27C6.74 5.09 3.57 3.38 1.46 0.79C1.09 1.42 0.88 2.16 0.88 2.94C0.88 4.43 1.63 5.75 2.79 6.5C2.08 6.5 1.42 6.3 0.84 6C0.84 6 0.84 6 0.84 6.03C0.84 8.11 2.32 9.85 4.28 10.24C3.92 10.34 3.54 10.39 3.15 10.39C2.88 10.39 2.61 10.36 2.35 10.31C2.89 12 4.46 13.26 6.35 13.29C4.89 14.45 3.04 15.13 1.02 15.13C0.68 15.13 0.34 15.11 0 15.07C1.9 16.29 4.16 17 6.58 17C14.46 17 18.79 10.46 18.79 4.79C18.79 4.6 18.79 4.42 18.78 4.23C19.62 3.63 20.34 2.87 20.92 2Z" fill="white" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className=' flex md:flex-row flex-col-reverse md:justify-between md:mt-12'>
                <div className=' text-white font-semibold mt-5 md:mt-0'>© {new Date().getFullYear()} Sindhi Books Info. All rights reserved.</div>
                <div className=' flex md:flex-row md:space-x-2  justify-between  '>
                    <Link className=' text-white underline' href={'/terms&conditions'}>Terms & Conditions</Link>
                    <Link className=' text-white underline' href={'/privacy-policy'}>Privacy Policy</Link>
                    <Link className=' text-white underline' href={'/help'}>Help</Link>
                </div>
            </div>
        </div>
    )
}
