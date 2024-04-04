import Image from 'next/image'

export default function Home() {
  return (
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    // <main className='prose prose-xl max-w-[800px] mx-auto w-[80vw]'>
    <main className='max-w-[800px] mx-auto w-[80vw] text-center my-10 text-xl'>
      <div className='flex flex-col gap-10'>
        <Image
          src='/sakura.jpg'
          width={800}
          height={2000}
          alt=''
          className='absolute opacity-30'
        />
        <div className='border border-gray-500 py-10 text-[100px] font-bold'>
          デフレ革命
        </div>
        <div className='border border-gray-500 py-10'>
          <p>25チーム</p>
          <p>だーしー・あっきー・かっぴー・さんちゃん・りんりん・いっちー</p>
        </div>
        <div className='border border-gray-500 py-10 text-[40px]'>
          24卒のミッション
        </div>
        <div className='flex justify-around items-center'>
          <div className='flex flex-col gap-10'>
            <div className='border border-gray-500 py-10'>24卒の強み</div>
            <div className='border border-gray-500 py-10'>
              フレッシュさデジタルネイティブ
            </div>
          </div>
          <div className='text-[100px]'>+</div>
          <div className='flex flex-col gap-10'>
            <div className='border border-gray-500 py-10'>
              組織から求められていること
            </div>
            <div className='border border-gray-500 py-10'>変革</div>
          </div>
        </div>
        <div className='border border-gray-500 py-10'>デジフレ改革</div>
        <div className='border border-gray-500 py-10'>
          <p>ミッションステートメント</p>
          <ul className='text-start px-10 pt-10 list-decimal'>
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

        <div className='border border-gray-500 py-10'>
          ※一部、生成AIで作りました
        </div>
      </div>
    </main>
  )
}
