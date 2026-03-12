type Detection = {
  class:string;
  confidence:number;
};

type Props = {
  detections:Detection[];
};

export default function ResultCard({detections}:Props){

  const grouped = detections.reduce((acc:any,item)=>{

    acc[item.class] = acc[item.class] || [];
    acc[item.class].push(item.confidence);

    return acc;

  },{});

  return(

    <div className="mt-8">

      <h2 className="text-xl font-semibold text-slate-700 mb-4">
        🐠 Detection Results
      </h2>

      <div className="space-y-4">

        {Object.entries(grouped).map(([cls,confidences]:any)=>{

          const maxConf = Math.max(...confidences);

          return(

            <div key={cls}
              className="bg-white/90 border border-cyan-200 rounded-xl p-4 shadow-md hover:shadow-cyan-200/50 transition">

              <div className="flex justify-between mb-2">

                <span className="font-medium text-slate-700">
                  {cls}
                </span>

                <span className="text-sm text-slate-500">
                  {confidences.length} detections
                </span>

              </div>

              <div className="w-full bg-cyan-100 rounded h-2">

                <div
                  className="bg-teal-500 h-2 rounded"
                  style={{width:`${Math.round(maxConf*100)}%`}}
                />

              </div>

              <p className="text-sm text-slate-500 mt-1">

                Max confidence: {(maxConf*100).toFixed(1)}%

              </p>

            </div>

          )

        })}

      </div>

    </div>

  )

}