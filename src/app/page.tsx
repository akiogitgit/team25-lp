import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(tokyo.png)`,
          // backgroundColor: 'rgba(255,255,255,0.7)',
          backgroundColor: 'rgba(20, 20, 20, 0.9)',
          backgroundBlendMode: 'lighten',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          objectFit: 'cover',
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          zIndex: -1,
          filter: 'blur(4px)',
        }}
      />

      <img src='/digifre.png' />
      <main className='max-w-[1500px] mx-auto w-[95vw] text-center mt-10 my-20 text-xl text-white'>
        <div className='flex flex-col gap-10 justify-center items-center'>
          <Image
            src='/missionDetail.png'
            width={800}
            height={800}
            alt=''
            className='sm:mt-[200px]'
          />
          <Image
            src='/digifreArrow.png'
            width={800}
            height={800}
            alt=''
            className=''
          />
          <div className=' py-10'>
            <Image
              src='/missionStatement.png'
              width={800}
              height={800}
              alt=''
              className=''
            />
            {/* <p>ミッションステートメント</p> */}
            {/* <ul className='text-start px-10 pt-10 list-decimal'> */}
            {/* <ul className='text-start px-10 pt-10 list-decimal max-w-[500px] mx-auto text-[14px]'>
              <li>&quot;協力せよ！共に行動に移す力は無限大だ！&quot;</li>
              <li>
                &quot;「食わず嫌い」から解放しろ！未知に最前線で挑戦し続けよ！&quot;
              </li>
              <li>
                &quot;チャンスを自分で掴み取れ！待ってはいけない、行動するんだ！&quot;
              </li>
              <li>
                &quot;未来はお前が切り開く！自分の力を信じて一歩進み続けろ！&quot;
              </li>
              <li>
                &quot;デジタル技術を使い倒せ！人々の生活をより良くするために全力を注げ！&quot;
              </li>
              <li>
                &quot;フレッシュな視点を忘れるな！世界を新たな角度から見つめ直そう！&quot;
              </li>
              <li>
                &quot;失敗から学びたまえ！それは成功への踏み台となる！&quot;
              </li>
              <li>
                &quot;常に心を開け！新たな可能性に、常にオープンな心で臨め！&quot;
              </li>
              <li>
                &quot;リーダーシップを発揮せよ！周りを導き、自らも成長し続けろ！
              </li>
            </ul> */}
          </div>
          {/* <div className=''>※一部、生成AIで作りました</div> */}

          <Image
            src='/description.png'
            width={300}
            height={800}
            alt=''
            className=''
          />
        </div>
      </main>
    </div>
  )
}
