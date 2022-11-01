import Button from "src/components/atoms/Button"
import FadeIn from "src/components/parts/FadeIn"

const FVContents = () => {
  const width = '92%'
  const height = '140%';
  return (
    <>
      <style jsx>{`
        .wrapper::before, .wrapper::after {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
        .wrapper::before {
          width: ${width};
          height: ${height};
          background: linear-gradient(to bottom right, 
          #2e86f5, #2e86f5 20%, 
          #c4daf5 20%, #c4daf5 40%, 
          #f59c2f 40%, #f59c2f 60%, 
          #f5dfc4 60%, #f5dfc4 80%, 
          #f5c993 80%, #f5c993 100%);
        }
        .wrapper::after {
          width: calc(${width} - 8px);
          height: calc(${height} - 8px);
          background: var(--base-color);
        }
      `}</style>
      <div className='flex items-center justify-center p-8 h-full'>
        <div>
          <FadeIn>
            <div className='wrapper relative'>
              <div className="relative z-10">
                <div className="mb-4">
                  <div className="mb-4">
                    <div className="font-bold text-center">＼楽しく学ぶ／</div>
                    <div className='text-2xl md:text-4xl font-bold text-center'>ドローン<span className="text-xl">×</span>プログラミング</div>
                    <div className="text-center font-bold">を体験しよう！</div>
                  </div>
                  <div className="text-center font-bold">セレクト塾生の小～高校生だけの<br />特別イベント開催！</div>
                </div>
              </div>
            </div>
          </FadeIn>
          <div className='text-center mt-20'><Button href='#info'>ドローンイベントの詳細を見る</Button></div>
        </div>
      </div>
    </>
  )
}

export default FVContents