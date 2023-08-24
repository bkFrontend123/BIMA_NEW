import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ScrollContainer from 'react-indiana-drag-scroll'
import ProgressBar from "react-scroll-progress-bar"

import { Container, Row, Col, Button, Accordion} from 'react-bootstrap'

import HeaderPlain from '../component/HeaderPlain'

import PolicyHeader from '../component/PolicyElements/PolicyHeader'
import SupportMobile from '../component/SupportMobile'
import QCompareHeadCol from '../component/QuoteCompareElements/QCompareHeadCol'
import QCompareKnowMore from '../component/QuoteCompareElements/QCompareKnowMore'
import HelpfulCard from '../component/HelpfulCard'
import QCompareHeading from '../component/QuoteCompareElements/QCompareHeading'

import quoteCompare from '@/assets/css/quoteCompare.module.css'
import quoteCompareMobile from '@/assets/css/quoteCompareMobile.module.css'

import BackArrow from '../component/Icons/BackArrow'

import standardCharteredIcon from '@/public/payment/standardCharteredIcon.png'
import stateBankIcon from '@/public/payment/stateBankIcon.png'
import hdfcErgoIcon from '@/public/payment/hdfcErgoIcon.png'
import iciciIcon from '@/public/payment/iciciIcon.png'
import bajajFinservIcon from '@/public/payment/bajajFinserv.png'

import iciciMobileIcon from '@/public/policyLogos/icici_logo.png'
import bajajFinservMobileIcon from '@/public/policyLogos/bajajAllianz_logo.png'


export default function QuoteComparison() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        document.body.classList.add("userFlowBody")
        document.body.classList.add("quotePageBody")
    }, []);

    const [isActiveDeductables, setIsActiveDeductables] = useState(false);

    const handleClickDeductables = event => {
        // 👇️ toggle isActive state on click
        setIsActiveDeductables(current => !current);
    };

    const [isActiveTerritory, setIsActiveTerritory] = useState(false);

    const handleClickTerritory = event => {
        // 👇️ toggle isActive state on click
        setIsActiveTerritory(current => !current);
    };

    const [isActiveExclusions, setIsActiveExclusions] = useState(false);

    const handleClickExclusions = event => {
        // 👇️ toggle isActive state on click
        setIsActiveExclusions(current => !current);
    };

    const router = useRouter();
    const goToAllPolicy = () => {
        router.push('/all_policies');
    };

    const firstDivRef = useRef(null);
    const secondDivRef = useRef(null);
    const [contentLoaded, setContentLoaded] = useState(false);
    const [activeKeys, setActiveKeys] = useState(["0"]);


    const handleAccordionSelect = (selectedKey) => {
        // Find if the selectedKey is already in activeKeys
        const index = activeKeys.indexOf(selectedKey);

        if (index === -1) {
            // If not present, add it
            setActiveKeys(selectedKey);
        } else {
            // If present, remove it
            setActiveKeys(activeKeys.filter(key => key !== selectedKey));
        }
        // setContentLoaded(true);
    };

    useEffect(() => {
        // Function to set column heights based on the taller content
        const setDynamicHeights = () => {
            window.requestAnimationFrame(() => {
            const firstDiv = firstDivRef.current;
            const secondDiv = secondDivRef.current;
    
            if (firstDiv && secondDiv) {
                const firstRows = firstDiv.querySelectorAll('.quote-row');
                const secondRows = secondDiv.querySelectorAll('.quote-row');
                console.log("First Rows: ", firstRows)
                console.log("Second Rows: ", secondRows)
    
                firstRows.forEach((firstRow, index) => {
                const secondRow = secondRows[index];
                if (secondRow) {
                    const firstColumns = firstRow.querySelectorAll('.quote-column');
                    const secondColumns = secondRow.querySelectorAll('.quote-column');
    
                    firstColumns.forEach((firstCol, colIndex) => {
                    const secondCol = secondColumns[colIndex];
                    if (secondCol) {
                        firstCol.style.height = "0px";
                        secondCol.style.height = "0px";
                        const firstColContentHeight = firstCol.scrollHeight;
                        const secondColContentHeight = secondCol.scrollHeight;
                        // Set the column height based on the taller content
                        const maxHeight = Math.max(firstColContentHeight, secondColContentHeight);
                        firstCol.style.height = `${maxHeight*2+16}px`;
                        secondCol.style.height = `${maxHeight*2+16}px`;
                        }
                    });
                }
                });
            }
            });
        };
    
        // Call the function initially and whenever contentLoaded changes
        if (contentLoaded) {
            setDynamicHeights();
        }
    
        // Add an event listener for window resize
        window.addEventListener('resize', setDynamicHeights);
    
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', setDynamicHeights);
        };
    }, [contentLoaded, activeKeys]);
    // Simulate loading content dynamically
    useEffect(() => {
    // Simulate loading content asynchronously
    setTimeout(() => {
        // Set contentLoaded to true after content is loaded
        setContentLoaded(true);
    },); // Adjust the time as needed to simulate content loading
    }, []);


    return (
        <>
            <Head>
                <title>Compare Quote | BimaKavach</title>
                <meta name="description" content="Compare customized quotes from top insurers. 24*7 claims support. Policy curated only for your business." />
                <link rel="canonical" href="" />
            </Head>
            <HeaderPlain
                downloadPDF="true"
                talkExpert="true"
            />
            <section className='quoteCompareBlock pt-4 pt-md-5'>
                <Container fluid>
                    <Row className='justify-content-center'>
                        <Col xl={11}>
                            <div className='d-none d-md-flex mb-3'>
                                <Button type="button" onClick={goToAllPolicy} className='btnCommon btnSmall greyBtn d-flex justify-content-center'>
                                    <BackArrow iconColor="primary" width="22" height="8" />
                                    <span className='ms-2'>Back to quotes</span>
                                </Button>
                            </div>
                            <div className='d-flex d-md-none align-items-start align-items-md-center justify-content-between gap-3 mb-4'>
                                <PolicyHeader
                                    coverageName="Directors & Officers Liability"
                                />
                                <SupportMobile
                                    customClass="d-md-none"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={`quoteCompareAccordian ${quoteCompare.quoteCompareTable} pb-5 d-none d-lg-block`}>
                    <Accordion allowMultiple defaultActiveKey={["0"]} onSelect={handleAccordionSelect} alwaysOpen>
                        <div className={quoteCompare.container}>
                        <div className={`${quoteCompare.quoteCompareLeftCol}`} ref={firstDivRef}>
                            <div className='quote-row'>
                            <div className={`${quoteCompare.quoteCompareHeader}`}>
                                <div className={`${quoteCompare.quoteCompareTtl}`}>
                                    <div className={`${quoteCompare.quoteCompareBtn}`}><span>Premium</span></div>
                                    (Additional GST will be applicable on the given premium)
                                </div>
                            </div>
                            <Accordion.Item eventKey="0" className={quoteCompare.accordianItem}>
                                <div className={`${quoteCompare.quoteCompareBody}`}>
                                    <Accordion.Header className={quoteCompare.accordianHeader}>
                                        <QCompareHeading
                                            title="Deductibles"
                                        />
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className={`${quoteCompare.quoteCompareBodyList}`}>
                                            <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                <QCompareKnowMore
                                                    title="Coverages"
                                                    subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                    whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                >
                                                    <HelpfulCard
                                                        customClass="mt-4 mt-lg-5"
                                                    />
                                                </QCompareKnowMore>
                                                <div><span>1. Cover for failure / negligence to supervise against any Professional Indemnity related claims Cover for failure / negligence to supervise against any Professional Indemnity related claims</span></div>
                                            </div>
                                            <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                <QCompareKnowMore
                                                    title="Coverages"
                                                    subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                    whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                >
                                                    <HelpfulCard
                                                        customClass="mt-4 mt-lg-5"
                                                    />
                                                </QCompareKnowMore>
                                                <div className={`${quoteCompare.cursor} ${isActiveDeductables ? quoteCompare.inactive : quoteCompare.active}`} onClick={handleClickDeductables}><span>2. Side B</span></div>
                                            </div>
                                            <div className={isActiveDeductables ? 'd-none' : ''}>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <QCompareKnowMore
                                                        title="Coverages"
                                                        subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                        whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                    >
                                                        <HelpfulCard
                                                            customClass="mt-4 mt-lg-5"
                                                        />
                                                    </QCompareKnowMore>
                                                    <div><span>a. India</span></div>
                                                </div>
                                                <div className={`${quoteCompare.quoteCompareListCol}`}>
                                                    <QCompareKnowMore
                                                        title="Coverages"
                                                        subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                        whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                    >
                                                        <HelpfulCard
                                                            customClass="mt-4 mt-lg-5"
                                                        />
                                                    </QCompareKnowMore>
                                                    <div><span>b. ROW</span></div>
                                                </div>
                                                <div className={`${quoteCompare.quoteCompareListCol}`}>
                                                    <QCompareKnowMore
                                                        title="Coverages"
                                                        subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                        whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                    >
                                                        <HelpfulCard
                                                            customClass="mt-4 mt-lg-5"
                                                        />
                                                    </QCompareKnowMore>
                                                    <div><span>c. EPLI</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </div>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className={quoteCompare.accordianItem}>
                                <div className={`${quoteCompare.quoteCompareBody}`}>
                                    <Accordion.Header className={quoteCompare.accordianHeader}>
                                        <QCompareHeading
                                            title="Coverages/Extensions"
                                        />
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className={`${quoteCompare.quoteCompareBodyList}`}>
                                            <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                <QCompareKnowMore
                                                    title="Coverages"
                                                    subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                    whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                >
                                                    <HelpfulCard
                                                        customClass="mt-4 mt-lg-5"
                                                    />
                                                </QCompareKnowMore>
                                                <div><span>1. Side A</span></div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </div>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className={quoteCompare.accordianItem}>
                                <div className={`${quoteCompare.quoteCompareBody}`}>
                                    <Accordion.Header className={quoteCompare.accordianHeader}>
                                        <QCompareHeading
                                            title="Territory & Jurisdiction"
                                        />
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className={`${quoteCompare.quoteCompareBodyList}`}>
                                            <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                <QCompareKnowMore
                                                    title="Coverages"
                                                    subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                    whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                >
                                                    <HelpfulCard
                                                        customClass="mt-4 mt-lg-5"
                                                    />
                                                </QCompareKnowMore>
                                                <div><span>1. Side A</span></div>
                                            </div>
                                            <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                <QCompareKnowMore
                                                    title="Coverages"
                                                    subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                    whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                >
                                                    <HelpfulCard
                                                        customClass="mt-4 mt-lg-5"
                                                    />
                                                </QCompareKnowMore>
                                                <div className={`${quoteCompare.cursor} ${isActiveTerritory ? quoteCompare.inactive : quoteCompare.active}`} onClick={handleClickTerritory}><span>2. Side B</span></div>
                                            </div>
                                            <div className={isActiveTerritory ? 'd-none' : ''}>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <QCompareKnowMore
                                                        title="Coverages"
                                                        subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                        whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                    >
                                                        <HelpfulCard
                                                            customClass="mt-4 mt-lg-5"
                                                        />
                                                    </QCompareKnowMore>
                                                    <div><span>a. India</span></div>
                                                </div>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <QCompareKnowMore
                                                        title="Coverages"
                                                        subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                        whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                    >
                                                        <HelpfulCard
                                                            customClass="mt-4 mt-lg-5"
                                                        />
                                                    </QCompareKnowMore>
                                                    <div><span>b. ROW</span></div>
                                                </div>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <QCompareKnowMore
                                                        title="Coverages"
                                                        subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                        whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                    >
                                                        <HelpfulCard
                                                            customClass="mt-4 mt-lg-5"
                                                        />
                                                    </QCompareKnowMore>
                                                    <div><span>c. EPLI</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </div>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className={quoteCompare.accordianItem}>
                                <div className={`${quoteCompare.quoteCompareBody}`}>
                                    <Accordion.Header className={quoteCompare.accordianHeader}>
                                        <QCompareHeading
                                            title="Exclusions"
                                        />
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className={`${quoteCompare.quoteCompareBodyList}`}>
                                            <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                <QCompareKnowMore
                                                    title="Coverages"
                                                    subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                    whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                >
                                                    <HelpfulCard
                                                        customClass="mt-4 mt-lg-5"
                                                    />
                                                </QCompareKnowMore>
                                                <div><span>1. Side A</span></div>
                                            </div>
                                            <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                <QCompareKnowMore
                                                    title="Coverages"
                                                    subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                    whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                >
                                                    <HelpfulCard
                                                        customClass="mt-4 mt-lg-5"
                                                    />
                                                </QCompareKnowMore>
                                                <div className={`${quoteCompare.cursor} ${isActiveExclusions ? quoteCompare.inactive : quoteCompare.active}`} onClick={handleClickExclusions}><span>2. Side B</span></div>
                                            </div>
                                            <div className={isActiveExclusions ? 'd-none' : ''}>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <QCompareKnowMore
                                                        title="Coverages"
                                                        subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                        whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                    >
                                                        <HelpfulCard
                                                            customClass="mt-4 mt-lg-5"
                                                        />
                                                    </QCompareKnowMore>
                                                    <div><span>a. India</span></div>
                                                </div>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <QCompareKnowMore
                                                        title="Coverages"
                                                        subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                        whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                    >
                                                        <HelpfulCard
                                                            customClass="mt-4 mt-lg-5"
                                                        />
                                                    </QCompareKnowMore>
                                                    <div><span>b. ROW</span></div>
                                                </div>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <QCompareKnowMore
                                                        title="Coverages"
                                                        subtitle="1. Dedicated additional limit for Non Executive Directors and Officers"
                                                        whatThisMeans={<><p>Uniswap decred harmony WAX elrond arweave. Secret THETA kadena secret horizen bitcoin waves stellar fantom kava. Binance stellar USD monero zcash terraUSD celsius helium hedera waves. Audius crypto velas cosmos TRON cosmos flow chainlink enjin. Celo solana EOS tezos holo polygon stellar stellar flow. Celo amp ox golem fantom solana serum nexo THETA binance. Shiba-inu PancakeSwap bancor binance tezos EOS hedera enjin shiba-inu polkadot. Revain ICON enjin BitTorrent tether klaytn golem ipsum. Neo avalanche maker aave holo cosmos aave. Chiliz EOS neo EOS vechain ankr amp holo compound</p></>}
                                                    >
                                                        <HelpfulCard
                                                            customClass="mt-4 mt-lg-5"
                                                        />
                                                    </QCompareKnowMore>
                                                    <div><span>c. EPLI</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </div>
                            </Accordion.Item>
                            </div>
                        </div>
                        <div className={`${quoteCompare.quoteCompareRightCol}`} ref={secondDivRef}>
                            <div className='quote-row'>
                            <ScrollContainer className="scroll-container">
                                <div className={`${quoteCompare.quoteCompareHeader}`}>
                                    <QCompareHeadCol
                                        icon={standardCharteredIcon}
                                        title="Standard Chartered"
                                    >
                                        <span>₹99,000</span>
                                    </QCompareHeadCol>
                                    <QCompareHeadCol
                                        icon={stateBankIcon}
                                        title="State Bank of India"
                                        iconWidth="27"
                                        iconHeight="27"
                                    >
                                        <Link href="">Get Quote</Link>
                                    </QCompareHeadCol>
                                    <QCompareHeadCol
                                        icon={hdfcErgoIcon}
                                        title="HFC Ergo"
                                    >
                                        <span>₹60,000</span>
                                    </QCompareHeadCol>
                                    <QCompareHeadCol
                                        icon={iciciIcon}
                                        title="ICICI Lombard"
                                    >
                                        <span>₹99,000</span>
                                    </QCompareHeadCol>
                                    <QCompareHeadCol
                                        icon={bajajFinservIcon}
                                        title="Bajaj Finserv"
                                    >
                                        <span>₹99,000</span>
                                    </QCompareHeadCol>
                                </div>
                                <Accordion.Item eventKey="0" className={quoteCompare.accordianItem}>
                                    <div className={`${quoteCompare.quoteCompareBody}`}>
                                        <Accordion.Body>
                                            <div className={`${quoteCompare.quoteCompareBodyList}`}>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                </div>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total ₹10.5 Lacs in Total ₹10.5 Lacs in Total ₹10.5 Lacs in Total ₹10.5 Lacs in Total ₹10.5 Lacs in Total</span>
                                                    </div>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                </div>
                                                <div className={isActiveDeductables ? 'd-none' : ''}>
                                                    <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                    </div>
                                                    <div className={`${quoteCompare.quoteCompareListCol}`}>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                    </div>
                                                    <div className={`${quoteCompare.quoteCompareListCol}`}>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </div>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className={quoteCompare.accordianItem}>
                                    <div className={`${quoteCompare.quoteCompareBody}`}>
                                        <Accordion.Body>
                                            <div className={`${quoteCompare.quoteCompareBodyList}`}>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </div>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className={quoteCompare.accordianItem}>
                                    <div className={`${quoteCompare.quoteCompareBody}`}>
                                        <Accordion.Body>
                                            <div className={`${quoteCompare.quoteCompareBodyList}`}>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                </div>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                </div>
                                                <div className={isActiveTerritory ? 'd-none' : ''}>
                                                    <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                    </div>
                                                    <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                    </div>
                                                    <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </div>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className={quoteCompare.accordianItem}>
                                    <div className={`${quoteCompare.quoteCompareBody}`}>
                                        <Accordion.Body>
                                            <div className={`${quoteCompare.quoteCompareBodyList}`}>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                    <div>
                                                        <span>N/A</span>
                                                    </div>
                                                </div>
                                                <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                    <div>
                                                        <span>₹10.5 Lacs in Total</span>
                                                    </div>
                                                </div>
                                                <div className={isActiveExclusions ? 'd-none' : ''}>
                                                    <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹1 Lacs each & every claim</span>
                                                        </div>
                                                    </div>
                                                    <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹2 Lacs each & every claim</span>
                                                        </div>
                                                    </div>
                                                    <div className={`quote-column ${quoteCompare.quoteCompareListCol}`}>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim ₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                        <div>
                                                            <span>₹7.5 Lacs each & every claim</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </div>
                                </Accordion.Item>
                            </ScrollContainer>
                            </div>
                        </div>
                        </div>
                    </Accordion>
                </div>
                <div className={`${quoteCompareMobile.quoteCompMblBlock} pb-5 d-lg-none`}>
                    <div className='pageScrollPrgrs'>
                        <ProgressBar bgcolor="#FFB400" duration="0.2" />
                    </div>
                    <Container>
                        <div className={`${quoteCompareMobile.quoteCompMblHdr}`}>
                            <div className={`${quoteCompareMobile.quoteCompMblHdrCol}`}>
                                <i>
                                    <Image src={iciciMobileIcon} width="221" height="46" alt="ICICI" />
                                </i>
                                <div className={`${quoteCompareMobile.quoteCompMblHdrBtn}`}>
                                    <Link href="" className="btnCommon yellowBtn">
                                        <span>99,000</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={`${quoteCompareMobile.quoteCompMblHdrPlus}`}>
                                <span>+</span>
                            </div>
                            <div className={`${quoteCompareMobile.quoteCompMblHdrCol}`}>
                                <i>
                                    <Image src={bajajFinservMobileIcon} width="245" height="31" alt="Bajaj Finserv" />
                                </i>
                                <div className={`${quoteCompareMobile.quoteCompMblHdrBtn}`}>
                                    <Link href="" className="btnCommon yellowBtn">
                                        <span>Get quote</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${quoteCompareMobile.quoteCompMblList}`}>
                            <div className={`${quoteCompareMobile.quoteCompMblListCol}`}>
                                <h4>1. Dedicated additional limit for Non Executive Directors and Officers</h4>
                                <ul>
                                    <li>
                                        <span>10% of LOI in aggregate</span>
                                    </li>
                                    <li>Covered</li>
                                </ul>
                            </div>
                            <div className={`${quoteCompareMobile.quoteCompMblListCol}`}>
                                <h4>2. Dedicated additional limit for Non Executive Directors and Officers</h4>
                                <ul>
                                    <li>
                                        <span>10% of LOI in aggregate</span>
                                    </li>
                                    <li>Covered</li>
                                </ul>
                            </div>
                            <div className={`${quoteCompareMobile.quoteCompMblListCol}`}>
                                <h4>3. Dedicated additional limit for Non Executive Directors and Officers</h4>
                                <ul>
                                    <li>
                                        <span>10% of LOI in aggregate</span>
                                    </li>
                                    <li>Covered</li>
                                </ul>
                            </div>
                            <div className={`${quoteCompareMobile.quoteCompMblListCol}`}>
                                <h4>4. Dedicated additional limit for Non Executive Directors and Officers</h4>
                                <ul>
                                    <li>
                                        <span>10% of LOI in aggregate</span>
                                    </li>
                                    <li>Covered</li>
                                </ul>
                            </div>
                            <div className={`${quoteCompareMobile.quoteCompMblListCol}`}>
                                <h4>5. Dedicated additional limit for Non Executive Directors and Officers</h4>
                                <ul>
                                    <li>
                                        <span>10% of LOI in aggregate</span>
                                    </li>
                                    <li>Covered</li>
                                </ul>
                            </div>
                            <div className={`${quoteCompareMobile.quoteCompMblListCol}`}>
                                <h4>6. Dedicated additional limit for Non Executive Directors and Officers</h4>
                                <ul>
                                    <li>
                                        <span>10% of LOI in aggregate</span>
                                    </li>
                                    <li>Covered</li>
                                </ul>
                            </div>
                            <div className={`${quoteCompareMobile.quoteCompMblListCol}`}>
                                <h4>7. Dedicated additional limit for Non Executive Directors and Officers</h4>
                                <ul>
                                    <li>
                                        <span>10% of LOI in aggregate</span>
                                    </li>
                                    <li>Covered</li>
                                </ul>
                            </div>
                            <div className={`${quoteCompareMobile.quoteCompMblListCol}`}>
                                <h4>8. Dedicated additional limit for Non Executive Directors and Officers</h4>
                                <ul>
                                    <li>
                                        <span>10% of LOI in aggregate</span>
                                    </li>
                                    <li>Covered</li>
                                </ul>
                            </div>
                            <div className={`${quoteCompareMobile.quoteCompMblListCol}`}>
                                <h4>9. Dedicated additional limit for Non Executive Directors and Officers</h4>
                                <ul>
                                    <li>
                                        <span>10% of LOI in aggregate</span>
                                    </li>
                                    <li>Covered</li>
                                </ul>
                            </div>
                            <div className={`${quoteCompareMobile.quoteCompMblListCol}`}>
                                <h4>10. Dedicated additional limit for Non Executive Directors and Officers</h4>
                                <ul>
                                    <li>
                                        <span>10% of LOI in aggregate</span>
                                    </li>
                                    <li>Covered</li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}