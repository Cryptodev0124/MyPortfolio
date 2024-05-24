import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import beliswap from "../../Assets/Projects/beli_swap.png";
import uniearn from "../../Assets/Projects/uni_earn.png";
import mvgbridge from "../../Assets/Projects/mvg_bridge.png";
import usdtstaking from "../../Assets/Projects/usdt_staking.png";
import rajupresale from "../../Assets/Projects/raju_presale.png";
import x4capital from "../../Assets/Projects/x4_capital.png";
import mpdashboard from "../../Assets/Projects/mp_dashboard.png";
import specterswap from "../../Assets/Projects/specter_swap.png";
import ethvault from "../../Assets/Projects/ethvault.png";

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
              imgPath={beliswap}
              isBlog={false}
              title="Belifix Swap"
              description="A next evolution DeFi exchange on BNB Smart Chain (BSC).
              The most popular AMM on BSC! Earn BEFX through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! 
              In this service I will provide you a dex with your customized requirements."
              // ghLink="https://github.com/mylovestar/Beliswap"
              demoLink="https://beliswap.app/"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
