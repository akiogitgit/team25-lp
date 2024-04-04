import Image from 'next/image'

export default function Home() {
  return (
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    // <main className='prose prose-xl max-w-[800px] mx-auto w-[80vw]'>
    <div>
      <div className='fixed top-0 left-0'>
        <img
          src='/tokyo.png'
          alt=''
          className='w-[100vw] h-[100vh] object-cover object-center opacity-50'
        />
      </div>
      {/* <Image
        src='/tokyo.png'
        // width={800}
        // height={2000}
        fill={true}
        alt=''
        className='fixed top-0 left-0 opacity-50 object-cover'
      /> */}
      <main className='max-w-[1500px] mx-auto w-[80vw] text-center my-10 text-xl'>
        <div className='flex flex-col gap-10'>
          {/* <Image
            src='/tokyo.png'
            width={800}
            height={2000}
            alt=''
            className='absolute opacity-50'
          /> */}
          <div className=' py-10 text-[200px] font-bold'>デジフレ革命</div>
          {/* <div className=' py-10 text-[30px]'>
            <p>だーしー・あっきー・かっぴー・さんちゃん・りんりん・いっちー</p>
          </div> */}
          ナポレオン
          <Image
            src='/tokyo.png'
            width={400}
            height={800}
            // fill={true}
            alt=''
            // className='absolute object-cover h-[200vh]'
            className='mx-auto'
          />
          <div className=' py-10 text-[40px]'>24卒のミッション</div>
          <div className='flex justify-around items-center'>
            <div className='flex flex-col gap-10'>
              <div className=' py-10'>24卒の強み</div>
              <div className=' py-10'>フレッシュさデジタルネイティブ</div>
            </div>
            <div className='text-[100px]'>+</div>
            <div className='flex flex-col gap-10'>
              <div className=' py-10'>組織から求められていること</div>
              <div className=' py-10'>変革</div>
            </div>
          </div>
          <div className=' py-10'>デジフレ改革</div>
          <div className=' py-10'>
            <p>ミッションステートメント</p>
            {/* <ul className='text-start px-10 pt-10 list-decimal'> */}
            <ul className='text-start px-10 pt-10 list-decimal max-w-[500px] mx-auto text-[14px]'>
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
            </ul>
          </div>
          <div className=' py-10'>※一部、生成AIで作りました</div>
        </div>
      </main>
    </div>
  )
}
