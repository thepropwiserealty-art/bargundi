import { MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const entranceClasses = "transition-opacity duration-700 opacity-100"
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        
        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          <div className={`space-y-4 ${entranceClasses}`}>
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-md flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Mantra Burgundy Logo"
                  width={200}
                  height={56}
                  className="h-14 w-auto rounded-md object-contain"
                />
              </div>
            </div>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Mantra Burgundy</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 8237311365</span>
              </div>
            </div>
          </div>

          <div className={`md:col-span-2 flex justify-between items-center px-4 ${entranceClasses}`}>
            <Image 
              src="/QRf.webp" 
              alt="QR Code" 
              width={128} 
              height={128} 
              className="h-32 w-32 object-contain rounded-md" 
            />
            <Image 
              src="/qr1.webp" 
              alt="QR Code" 
              width={128} 
              height={128} 
              className="h-32 w-32 object-contain rounded-md" 
            />
            <Image 
              src="/qr2.webp" 
              alt="QR Code" 
              width={128} 
              height={128} 
              className="h-32 w-32 object-contain rounded-md" 
            />
          </div>
        </div>

        {/* DISCLAIMER - Uses native transition properties */}
        <div className={`mt-10 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/80 leading-relaxed space-y-3 ${entranceClasses}`}>
          <p>
            <strong>This project is RERA registered.</strong> | Authorized Channel Partner |
            Channel Partner RERA Number: <strong>A52100000378</strong> |
            Project RERA Number: <strong>P52100079047</strong>
          </p>
          <p>
            Please be advised that this website is not an official site and serves solely as an
            informational portal managed by a RERA authorized real estate agent. It does not
            constitute an offer or guarantee of any services. The prices displayed on this website
            are subject to change without prior notice, and the availability of properties cannot
            be guaranteed. The images showcased are for representational purposes only and may not
            accurately reflect actual properties. We may share your data with RERA-registered
            Developers as necessary and may send updates to the mobile number or email registered
            with us. All rights reserved. Unauthorized use, reproduction, or distribution of the
            site's content is prohibited and may violate applicable laws. For accurate and
            up-to-date information, please contact us directly. Thank you for visiting.
          </p>
          <p className="mt-6 text-sm">© 2025 Mantra Burgundy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}