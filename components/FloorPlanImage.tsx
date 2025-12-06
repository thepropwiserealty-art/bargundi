import { useContext } from "react"
import context from "@/lib/context"
import Image from "next/image"

type floorPlan = {
    id: number,
    name: string,
    size: string,
    beds: number,
    price: string,
    image: string,
    features: Array<string>,
};

function FloorPlanImage({selectedPlan}:{selectedPlan: floorPlan}) {
    const { isAuthenticated } = useContext(context);
    return (
        <Image
            src={selectedPlan.image || "/placeholder.svg"}
            alt={`${selectedPlan.name} Floor Plan`}
            fill
            className={
                isAuthenticated
                    ? "object-cover blur-image-clear transition-all duration-500"
                    : "object-cover blur-image transition-all duration-500"
            }
            sizes="(max-width: 768px) 100vw, 350px"
        />
    )
}

export default FloorPlanImage