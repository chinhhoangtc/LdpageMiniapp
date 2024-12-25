import React from "react";

import { Header } from "../../component/header";
import { Footer } from "../../component/footer";

import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import imgBlock1 from "../../assets/images/imgBlock1.png";
import imgBlock2 from "../../assets/images/imgBlock2.png";
import imgBlock3 from "../../assets/images/imgBlock3.png";
import imgIntro from "../../assets/images/imgIntro.png";
import imgQrcode from "../../assets/images/qrCode.png";
import imgArrow from "../../assets/images/arrow.png";

import "./index.css";

export function Home() {
  return (
    <div>
      <Header />
      <div className="content pt-5">
        {/* ------------------------------------------------- */}

        <div className="d-flex justify-content-center pt-5">
          <div className="py-5 text-center content-one">
            <h1 id="#main" className="custom-title fw-bold my-5">
              Mine, Play, Earn
            </h1>
            <p className="custom-content text-center pb-3 px-2">
              Join the mining based game where you can earn tokens through using
              your device power. The algorithm is the same as mining in bitcoin,
              with limited token supply that will be distributed on TON
              blockchain.
            </p>
            <button className="custom-button justify-content-center align-items-center border-0">
              Start Mining
            </button>
          </div>
        </div>

        {/* ------------------------------------------------- */}

        <div className="content-two py-5">
          <h1 id="stats" className="custom-title-two text-center py-5">
            Memhash Network Statistics
          </h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 text-center ">
                <div className="custom-block-two m-2 d-flex justify-content-center flex-column align-items-center">
                  <p className="custom-p-two">1,000,000</p>
                  <p className="custom-p-2-two">Two Blocks</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 text-center ">
                <div className="custom-block-two m-2 d-flex justify-content-center flex-column">
                  <p className="custom-p-two">1,000,000,000</p>
                  <p className="custom-p-2-two">Total Token Supply</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 text-center ">
                <div className="custom-block-two m-2 d-flex justify-content-center flex-column">
                  <p className="custom-p-two">~5-6s</p>
                  <p className="custom-p-2-two">Block Generation Time</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 text-center ">
                <div className="custom-block-two m-2 d-flex justify-content-center flex-column">
                  <p className="custom-p-two">500+</p>
                  <p className="custom-p-2-two">Starting Block Reward</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="custom-div-note">
              <p className="custom-p-note-two text-center px-3">
                Track real-time performance metrics of the Memhash network. The
                transparent system ensures every mining contribution is properly
                recorded and rewarded.
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------- */}

        <div className="content-three">
          <div className="text-center pt-5 pb-4">
            <h1 className="custom-h1-three pt-1">Key Features</h1>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="custom-div-note-three">
              <p className="custom-p-note-three text-center pb-4 px-3">
                Discover how Memhash revolutionizes token distribution through
                innovative mining mechanics and community-driven features.
              </p>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-stretch py-5">
                <div className="custom-block-three p-4 d-flex flex-column">
                  <img src={icon1} alt="" width="32px" />
                  <h1 className="custom-block-h1-three pt-4 pb-4">
                    Fair Distribution
                  </h1>
                  <p className="custom-block-p-three">
                    Experience equality in token distribution through
                    computational challenges. The system ensures every
                    participant has an equal opportunity to earn rewards based
                    on their contribution.
                  </p>
                  <ul className="custom-block-ul-three mt-auto">
                    <li>Equal mining opportunities for all participants</li>
                    <li>Transparent reward distribution</li>
                    <li>No pre-mining or special privileges</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-stretch py-5">
                <div className="custom-block-three p-4 d-flex flex-column">
                  <img src={icon2} alt="" width="32px" />
                  <h1 className="custom-block-h1-three pt-4 pb-4">
                    Dynamic Difficulty
                  </h1>
                  <p className="custom-block-p-three">
                    Mining difficulty recalibrates every 10 blocks to maintain
                    consistent block generation, ensuring fair distribution as
                    more miners join.
                  </p>
                  <ul className="custom-block-ul-three mt-auto">
                    <li>Automatic difficulty adjustment</li>
                    <li>Consistent 5-6 second block time</li>
                    <li>Balanced mining environment</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-stretch py-5">
                <div className="custom-block-three p-4 d-flex flex-column">
                  <img src={icon3} alt="" width="32px" />
                  <h1 className="custom-block-h1-three pt-4 pb-4">
                    Shared Mining
                  </h1>
                  <p className="custom-block-p-three">
                    Join forces with other miners in Memhash's collaborative
                    mining system. Earn proportional rewards through the
                    innovative share distribution mechanism that rewards
                    teamwork.
                  </p>
                  <ul className="custom-block-ul-three mt-auto">
                    <li>70% reward for block finder</li>
                    <li>30% shared among contributors</li>
                    <li>Proportional share distribution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="text-center pt-5 pb-4">
              <h1
                id="how-it-works"
                className="custom-h1-three-v2 text-center pt-1"
              >
                How Memhash Works
              </h1>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="custom-div-note-three">
                <p className="custom-p-note-three-v2 text-center pb-4">
                  In simple words: you are using your device power to solve some
                  kind of captcha to receive tokens in return.
                </p>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 ">
                  <div className="custom-block-three-v2 position-relative ps-4 my-2">
                    <h1 className="custom-block-h1-three-v2 pt-5 pb-4">
                      Mining Process
                    </h1>
                    <p className="custom-block-p-three-v2">
                      Your device solves computational challenges to generate
                      blocks. Successfully mined blocks earn you rewards
                      starting at 500 tokens.
                    </p>
                    <p className="custom-block-p2-three-v2">Key Points:</p>
                    <ul className="custom-block-ul-three mt-auto">
                      <li>Similar to Bitcoin mining algorithm</li>
                      <li>Blocks generated every 5-6 seconds</li>
                      <li>Increasing block rewards over time</li>
                    </ul>
                    <img className="position-absolute" src={imgBlock1} alt="" />
                  </div>
                </div>
                <div className="col-12 col-md-6 ">
                  <div className="custom-block-three-v2 position-relative ps-4 my-2">
                    <h1 className="custom-block-h1-three-v2 pt-5 pb-4">
                      Reward System
                    </h1>
                    <p className="custom-block-p-three-v2">
                      Solo miners receive 100% of block rewards. In shared
                      mining, rewards are split between the block finder and
                      contributors.
                    </p>
                    <p className="custom-block-p2-three-v2">Distribution:</p>
                    <ul className="custom-block-ul-three mt-auto">
                      <li>Block finder: 70% of reward</li>
                      <li>Share contributors: 30% of reward</li>
                      <li>Fair distribution based on contribution</li>
                    </ul>
                    <img className="position-absolute" src={imgBlock2} alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="custom-block-three-v2 position-relative ps-4 my-3">
                    <h1 className="custom-block-h1-three-v2 pt-5 pb-4">
                      Token Distribution
                    </h1>
                    <p className="custom-block3-p-three-v2">
                      Mining continues until all 1,000,000 blocks are generated,
                      estimated to complete by December 2024.
                    </p>
                    <p className="custom-block3-p2-three-v2">Timeline:</p>
                    <ul className="custom-block-ul-three mt-auto">
                      <li>Total supply: 1,000,000,000 tokens</li>
                      <li>Distribution via TON Blockchain</li>
                      <li>Tokens issued as jettons</li>
                    </ul>
                    <img className="position-absolute" src={imgBlock3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------- */}

        <div className="container-fluid py-5 ">
          <div className="row">
            <div className="col-md-5 custom-div-left-four h-100 d-flex align-items-center justify-content-center position-relative h-auto d-none d-md-block">
              <div className=" position-absolute p-5">
                <div className="custom-div-img-four">
                  <img src={imgIntro} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12 ">
              <div className="p-5">
                <div className="pt-5 pb-4">
                  <h1 className="text-center text-md-start custom-h1-four pt-1">
                    Frequently Asked Questions
                  </h1>
                </div>
                <div className="">
                  <div className="custom-block-four my-3">
                    <h1 className="custom-block-h1-four">What is Memhash?</h1>
                    <p className="custom-block-p-four">
                      Memhash is a mining-based game where players can earn
                      tokens by contributing computational power. It uses a
                      Bitcoin-like mining algorithm but with unique features for
                      fair distribution.
                    </p>
                  </div>
                  <div className="custom-block-four my-3">
                    <h1 className="custom-block-h1-four">
                      How do I start mining?
                    </h1>
                    <p className="custom-block-p-four">
                      Simply join the Telegram bot to start mining. No special
                      hardware is required - you can mine using your regular
                      device.
                    </p>
                  </div>
                  <div className="custom-block-four my-3">
                    <h1 className="custom-block-h1-four">
                      When will tokens be distributed?
                    </h1>
                    <p className="custom-block-p-four">
                      Tokens will be distributed on the TON Blockchain as
                      jettons once all 1,000,000 blocks are mined (estimated by
                      December 2024).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------ */}
        <div className="custom-div-five py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="px-5 px-md-0">
                  <h1 className="custom-h1-three-v2 pt-5">#MEMHASH</h1>
                  <p className="custom-block-p-five py-3">MINING SIMULATION game inside TELEGRAM</p>
                  <p className="custom-block-p2-five pb-3">
                    Telegram mini game where you can earn rewards through mining
                    similar to Bitcoin.
                  </p>
                  <div className="d-flex gap-5 align-items-center">
                    <button className="custom-button-six border-0 text-center d-inline-flex justify-content-center align-items-center">Open in Telegram</button>
                    <div className="custom-button-div-speedtest-five d-flex justify-content-center align-items-center px-3 gap-3">
                      <img src={imgArrow} alt="" />
                      <p className="custom-p-speedtest-five">Speed Test</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="py-5 d-flex ms-0 ms-md-5 justify-content-center justify-content-md-start">
                  <div className=" border custom-div-qrcode-five d-flex justify-content-center align-items-center">
                    <div className="custom-qrcode-five">
                      <img src={imgQrcode} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}

        <div className="custom-div-six h-auto py-5 text-center">
          <div className=" pt-5 pb-5">
            <h1 className="custom-h1-six pb-3">How Memhash Works</h1>
            <p className="custom-p-six pb-3">
              Discover how Memhash revolutionizes token distribution through
              innovative mining mechanics and community-driven features.
            </p>
            <button className="custom-button-six border-0 text-center d-inline-flex justify-content-center align-items-center">
              Join Telegram
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
