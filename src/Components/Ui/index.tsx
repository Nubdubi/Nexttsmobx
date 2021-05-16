import React, { useState, useEffect, useRef } from 'react'
import {
  Container,
  RowBox,
  TextBox,
  Card,
  AppBar,
  Button,
  VideoBox,
  Image,
  Text,
  H1,
  DownButton,
  Section,
  LeftMove,
  RightMove,
  UpDown,
  DownUp,
} from './Lilterface'
export default function Design({ children, ...restProps }: ChildrenType): JSX.Element {
  return <Container {...restProps}>{children}</Container>
}
Design.Section = function DesignSection({ ...restProps }: ChildrenType): JSX.Element {
  const [position, setPosition] = useState(0)
  function onScroll() {
    setPosition(window.scrollY)
    // console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const _videoRef = useRef(null)
  // video useref
  const _handleScorll = () => {
    const video = _videoRef.current
    // video 분할
    if (video) {
      const pos = (window.scrollY * 5) / window.innerHeight
      console.log('영상 길이 ', pos, '스크롤높이', window.scrollY, '윈도우', window.innerHeight)
      video.currentTime = pos
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', _handleScorll)
    return () => {
      window.removeEventListener('scroll', _handleScorll)
    }
  }, [])

  return (
    <Section {...restProps}>
      <RowBox
        style={{
          backgroundImage: 'url(https://blog.kakaocdn.net/dn/6CEcF/btqxVzYzsYJ/hW9z8hX5DgILkKPk8AYr70/img.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: (1000 - position) / 1000,
        }}
      >
        <TextBox
          style={{
            opacity: (1000 - position) / 1000,
          }}
        >
          <H1>우리는 바다 깊숙한 수분감을 찾으러 함께 떠나볼까요?</H1>
          <Text>깊숙한 심해속으로 우리는 여행을 떠나 봅니다.</Text>
        </TextBox>
      </RowBox>
      <DownButton>Down</DownButton>
      <RowBox style={{ opacity: (position * 2) / 1200 }}>
        <h1 style={{ color: 'white' }}>촉촉하고 건강한 피부를 꿈꾸시나요?</h1>
        <h2 style={{ color: 'gray' }}>영양이 풍부한 원재료를 듬뿍담은</h2>
        <h2 style={{ color: 'gray' }}>꾸덕한 제형의 워시 오프팩으로 촉촉한 피부로 가꾸는데 도움을 줍니다.</h2>
        <h2 style={{ color: 'gray' }}>신선한 영양이 가득한 해초는 피부를 부드럽게 가꾸는데 도움을 주고</h2>
        <h2 style={{ color: 'gray' }}>꿀과 장미, 알로에베라는 촉촉함을 더해줍니다.</h2>
        <h2 style={{ color: 'gray' }}>카올린과 아몬드는 부드러움을 더해 당신이 꿈꿔온 피부를 선사해줄거에요</h2>
      </RowBox>
      <RowBox>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ color: 'white' }}>어떻게 사용해야 할까요?</h1>
            <h2 style={{ color: 'gray' }}>냉장고에서 제품을 꺼내</h2>
            <h2 style={{ color: 'gray' }}>깨끗한 스패츌러와 같은 도구로골고루 섞어줍니다.</h2>
            <h2 style={{ color: 'gray' }}>얼굴에 피부 결이 보이지않을 정도로 바른 후</h2>
            <h2 style={{ color: 'gray' }}>5~10분 후 물로 헹궈내며 마사지합니다.</h2>
            <h2 style={{ color: 'gray' }}>*팩이 마르기 전 헹궈내기를 권장합니다.</h2>
          </div>
          <div style={{ width: '50%', height: '50%' }}>
            <img
              style={{ borderRadius: '24px', transform: `translateX(${position - 2000}px)` }}
              src="http://img.lush.co.kr/product/face/bbseaweed_use.jpg"
            />
          </div>
        </div>
      </RowBox>
      <RowBox>
        <VideoBox>
          <section>
            <div
              id="videoCart"
              style={{
                position: 'sticky',
                top: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
              }}
            >
              <video ref={_videoRef} muted playsInline>
                <source type="video/webm" src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm" />
              </video>
            </div>
          </section>
        </VideoBox>
      </RowBox>
      <RowBox>
        <div
          className="slide-up-wrap"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundImage: 'url(https://yourdocent.com/img/soapimg.jpg)',
            backgroundSize: 'cover',
            width: '100%',
            height: '100vh',
          }}
        >
          <div
            style={{
              width: '500px',
              height: '100vh',
              borderRadius: '24px',
              backgroundColor: '#aaaaaa50',
              transform: `translateX(${position - 3800}px)`,
            }}
          >
            hello everyone
          </div>
          <div
            style={{
              width: '500px',
              height: '100vh',
              borderRadius: '24px',
              backgroundColor: '#aaaaaa50',
              transform: `translateX(${position - 3800}px)`,
            }}
          >
            nice to meet you
          </div>
        </div>
      </RowBox>
      <RowBox></RowBox>
    </Section>
  )
}
Design.RowBox = function DesignRowBox({ children, ...restProps }: ChildrenType): JSX.Element {
  return <RowBox {...restProps}>{children}</RowBox>
}

// video box
Design.VideoBox = function DesignVideoBox() {
  const _videoRef = useRef(null)
  // video useref
  const _handleScorll = () => {
    const video = _videoRef.current
    // video 분할
    if (video) {
      const pos = (window.scrollY * 5) / window.innerHeight
      console.log('영상 길이 ', pos, '스크롤높이', window.scrollY, '윈도우', window.innerHeight)
      video.currentTime = pos
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', _handleScorll)
    return () => {
      window.removeEventListener('scroll', _handleScorll)
    }
  }, [])

  return (
    <VideoBox>
      <div>
        <div id="videoCart" style={{ width: '100%', position: 'relative' }}>
          <video ref={_videoRef} muted playsInline>
            <source type="video/webm" src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm" />
          </video>
        </div>
      </div>
    </VideoBox>
  )
}

Design.Button = function DesignButton({ children, ...restProps }: ChildrenType): JSX.Element {
  return <Button {...restProps}>{children}</Button>
}

Design.Card = function DesignCard({ children, ...restProps }: ChildrenType): JSX.Element {
  return <Card {...restProps}>{children}</Card>
}

Design.AppBar = function DesignAppBar({ children, ...restProps }: ChildrenType): JSX.Element {
  return <AppBar {...restProps}>{children}</AppBar>
}

Design.Image = function DesignAppImage({ ...restProps }) {
  return <Image {...restProps} />
}

Design.Text = function DesignText({ ...restProps }: className) {
  return <Text {...restProps}></Text>
}

Design.LeftMove = function DesignLeftMove({ children, ...restProps }: ChildrenType): JSX.Element {
  return <LeftMove {...restProps}>{children}</LeftMove>
}
Design.RightMove = function DesignAppRightMove({ children, ...restProps }: ChildrenType): JSX.Element {
  return <RightMove {...restProps}>{children}</RightMove>
}
Design.UpDown = function DesignUpDown({ children, ...restProps }: ChildrenType): JSX.Element {
  return <UpDown {...restProps}>{children}</UpDown>
}
Design.DownUp = function DesignDownUp({ children, ...restProps }: ChildrenType): JSX.Element {
  return <DownUp {...restProps}>{children}</DownUp>
}
