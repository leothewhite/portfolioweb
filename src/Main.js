import "./Main.css";
import { SectionsContainer, Section } from "react-fullpage";
import { Fade, Slide } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useState } from "react";

let options = {
  anchors: ["1", "2", "3", "4"],
  navigation: false,
};

function Main() {
  const [scroll, setScroll] = useState(0);
  const [textMove, setTextMove] = useState(0);

  return (
    <div className="r">
      {/* <SectionsContainer {...options}> */}
      <div style={{ height: "100vh", width: "100vw" }}>
        <div
          id="me"
          style={{
            marginTop: "10%",
            fontSize: "600%",
            marginLeft: `${textMove * 2 + 1}%`,
          }}
        >
          <Slide duration={1500} cascade={true} triggerOnce={true}>
            <div style={{ marginBottom: "2%" }}>
              "포브스 선정 가장 열정있는 학생 개발자 1위"
            </div>
          </Slide>
          <Slide
            duration={2000}
            cascade={true}
            direction="left"
            triggerOnce={true}
          >
            <div>김지나</div>
          </Slide>
          {scroll === 0 ? (
            <motion.div
              initial={{
                top: "110vh",
                fontSize: "30%",
                position: "absolute",
                width: "100vw",
                textAlign: "center",
                color: "#FF8100",
                opacity: 1,
              }}
              animate={{ top: "90vh" }}
              transition={{
                duration: 1.5,
                delay: 1,
                // opacity: { delay: 3, duration: 10, ease: "easeInOut" },
              }}
            >
              스크롤하여 내리기
            </motion.div>
          ) : null}
        </div>
      </div>
      <div style={{ height: "100vh", width: "100vw" }}>
        <div id="me" style={{ marginTop: "10%", color: "#D3F0FF" }}>
          <div style={{ fontSize: "150%", marginBottom: "3%" }}>
            <Typewriter
              options={{
                strings: ["Passion", "Patient", "Possibility", "Positive"],
                autoStart: true,
                loop: true,
                cursor: "_",
                deleteSpeed: "50",
                delay: "100",
                pauseFor: "500",
              }}
            />
          </div>
          <div style={{ fontSize: "90%", marginBottom: "1%" }}>
            천재는 99% 노력과 1% 영감으로 이루어진다
          </div>
          <div style={{ fontSize: "50%" }}>
            저에겐 1%의 영감이 있다 믿어 의심치 않기에 99%의 노력을 할 것입니다.
          </div>
        </div>
      </div>
      <div style={{ height: "100vh", width: "100vw" }}>
        <div id="me" style={{ marginTop: "10%" }}>
          <div
            style={{
              color: "#FFFFFF",
              textDecoration: "underline",
              textDecorationThickness: "3px",
              textDecorationColor: "#F20C1F",
            }}
          >
            사례
          </div>
          <div style={{ fontSize: "50%", color: "#F20C1F" }}>
            <div>
              초등학교 6학년 겨울방학, 담임 선생님께 선물을 해드리고 싶었습니다.
            </div>
            <div>
              그 당시 개발에 큰 관심이 있던 때라 게임을 만들어서 선물로 드리자는
              아이디어를 생각했습니다.
            </div>
            <div>
              결국 관련 지식이 거의 없는 상태로 겨울방학 1달 남짓한 시간동안
            </div>
            <div>
              플레이타임 10분정도 되는 스토리 게임을 만들어서 드렸습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
