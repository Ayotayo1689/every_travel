interface IframeMapProps {
    address: string
    width?: string
    height?: string
    zoom?: number
  }
  
  export default function IframeMap({ address, width = "100%", height = "70vh", zoom = 14 }: IframeMapProps) {
    const encodedAddress = encodeURIComponent(address)
  
    const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`
  
    return (
      <div className="w-full h-full">
        <iframe
          src={mapUrl}
          width={width}
          height={height}
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={`rounded-lg shadow-md h-[70vh]`}         />
      </div>
    )
  }
  