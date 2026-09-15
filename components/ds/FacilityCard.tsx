import Image from "next/image"

/**
 * FacilityCard — listing/facility grid card with live imagery and a
 * name + price row (brand-board §05).
 */
export function FacilityCard({
  image,
  name,
  price,
}: {
  image?: string
  name: string
  price: string
}) {
  return (
    <div className="overflow-hidden rounded-[16px] border border-brand-line-soft bg-brand-panel">
      <div className="relative h-[90px] bg-brand-spruce">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="140px"
            className="object-cover"
          />
        ) : null}
      </div>
      <div className="px-3 py-2.5">
        <p className="m-0 text-[12px] font-bold text-brand-onyx">{name}</p>
        <p className="m-0 text-[11px] font-semibold text-brand-hunter">
          {price}
        </p>
      </div>
    </div>
  )
}
