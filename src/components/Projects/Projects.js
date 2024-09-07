import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import hamster from "../../Assets/Projects/hamster.png";
import mexcbot from "../../Assets/Projects/mexcbot.png";
import beliswap from "../../Assets/Projects/beli_swap.png";
import uniearn from "../../Assets/Projects/uni_earn.png";
import mvgbridge from "../../Assets/Projects/mvg_bridge.png";
import usdtstaking from "../../Assets/Projects/usdt_staking.png";
import rajupresale from "../../Assets/Projects/raju_presale.png";
import x4capital from "../../Assets/Projects/x4_capital.png";
import mpdashboard from "../../Assets/Projects/mp_dashboard.png";
import specterswap from "../../Assets/Projects/specter_swap.png";
import ethvault from "../../Assets/Projects/ethvault.png";
import raffle from "../../Assets/Projects/raffle-game.png";
import tera from "../../Assets/Projects/tera.png";
import ecat from "../../Assets/Projects/ecat.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hamster}
              isBlog={false}
              title="Hamster Kombat"
              description="Hamster Kombat is a Telegram tap game. Users get points from tapping, mining and completing tasks and then they get airdrop according to points they got.
              The game attract more and more potential investors and fans and they invest for your token or ecosystem. The hamster kombat has over 25M players and that will bring great profit for the team sooner or later."
              // ghLink="https://github.com/mylovestar/Beliswap"
              demoLink="https://t.me/@hamster_kombat_dev_bot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raffle}
              isBlog={false}
              title="Raffle Game"
              description="I will build Raffle, Lottery, Spin and Coin Flip games on Evm, Solana, Tron and Ton. In the IRA Raffle game, 30 tickets are sold per spin. The winner of each round is awarded a prize equal to 90% of the IRA staked by all users in that round."
            // ghLink="https://github.com/mylovestar/Beliswap"
            demoLink="https://ira-raffle.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecat}
              isBlog={false}
              title="Ecat Mini Game"
              description="I will build Telegram mini game like Ecat Kombat. Ecat Kombat will airdrop ECAT tokens to users. Please join Ecat Kombat and receive ECAT."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://t.me/@local_game_test_bot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tera}
              isBlog={false}
              title="Terafarm"
              description="Terafarm is a decentralized application and platform. It is not registered as a broker, dealer, investment advisor, or investment company in the US or any other jurisdiction."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://terafarm.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mexcbot}
              isBlog={false}
              title="MEXC Frontend Bot"
              description="I will build Mexc frontend bot with your custom UI and strategy"
            // ghLink="https://github.com/mylovestar/Beliswap"
            demoLink="https://mexcbot.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ethvault}
              isBlog={false}
              title="Rinascimento Money"
              description="Rinascimento Money is a Vault for USDT, ETH and BTC on Ethereum. In this service I will provide you a Vault with your requirements and custom UI."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://rinascimento.money/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uniearn}
              isBlog={false}
              title="Uniearn Finance"
              description="The first algorithmic stablecoin on Arbitrum, pegged to the price of 1 USDC via seigniorage.
              Stake your UNI-USDC LP in the Pools to earn USHARE rewards.         
              Then stake your earned USHARE in the Boardroom to earn more UNI!
              In this service I will fork tomb.finance."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://uniearnfinance.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mvgbridge}
              isBlog={false}
              title="MVG Bridge"
              description="MVG Bridge is a bridge for Mad Viking tokens between Vechain and BSC. In this service I will provide you cross chain bridge between evm or other networks."
              // ghLink="https://github.com/mylovestar/Vechain-Bsc_frontend"
              demoLink="https://mvgbridge.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usdtstaking}
              isBlog={false}
              title="USDT Staking Dapp"
              description="USDT Staking is a staking dapp for USDT. I will provide you a staking dapp with your requirements on any networks."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://usdt-staking.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rajupresale}
              isBlog={false}
              title="Raju Presale"
              description="Advance Finance from the Future for the Future. In this service I will provide you a Presale dapp."
              // ghLink="https://github.com/mylovestar/RajuPresale"
              demoLink="https://rajupresale.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={x4capital}
              isBlog={false}
              title="X4Capital"
              description="X4Capital is forked from BakedBeans. I will fork BakedBeans with your customized requirements and your unique desing."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://x4capital.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mpdashboard}
              isBlog={false}
              title="MP Dashboard"
              description="MP Dashboard is a dashboard which shows various datum such as toekn price, balance and buy and sell volumn etc. In this service I will provide you a dashboard like MP Dashboard on any networks."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://mpdashboard.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={specterswap}
              isBlog={false}
              title="Specter Swap"
              description="Specter Swap is a crypto mixer like FixedFloat. In this service I will provide you a crypto mixer with your requirements and custom UI."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://specterswap.netlify.app/#/swap"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
