import Button from "src/components/atoms/Button"

const FVContents = () => {
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
          width: 90%;
          height: 150%;
          background: linear-gradient(to bottom right, 
          #2e86f5, #2e86f5 20%, 
          #c4daf5 20%, #c4daf5 40%, 
          #f59c2f 40%, #f59c2f 60%, 
          #f5dfc4 60%, #f5dfc4 80%, 
          #f5c993 80%, #f5c993 100%);
        }
        .wrapper::after {
          width: calc(90% - 8px);
          height: calc(150% - 8px);
          background: #FFF;
        }
      `}</style>
      <div className='flex items-center justify-center p-8 h-full'>
        <div>
          <div className='wrapper relative'>
            <div className="relative z-10">
              <div className="mb-4">
                <div className="mb-4">
                  <div className="font-bold">＼楽しく学ぶ／</div>
                  <div className='text-3xl font-bold'>ドローンとプログラミング</div>
                  <div className="text-right font-bold">を体験しよう！</div>
                </div>
                <div className="text-center font-bold">セレクト塾生の小～高校生限定！</div>
              </div>
            </div>
          </div>
          <div className='text-center mt-12'><Button href='#info'>ドローンイベントの詳細を見る</Button></div>
        </div>
      </div>
    </>
  )
}

export default FVContents