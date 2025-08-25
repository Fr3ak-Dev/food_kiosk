"use client"
import { CldUploadWidget } from "next-cloudinary"
import { TbPhotoPlus } from "react-icons/tb"

export default function ImageUpload() {
    return (
        // <CldUploadWidget signatureEndpoint="<API Endpoint (ex: /api/sign-cloudinary-params)>">
        <CldUploadWidget uploadPreset="upload_food_kiosk"
            options={{ maxFiles: 1 }}
            onSuccess={(result, { widget }) => {
                console.log(result)
            }}>
            {({ open }) => (
                <>
                    <div className="space-y-2">
                        <label className="text-slate-800">Imagen Producto</label>
                        <div className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center
                            gap-4 text-neutral-600 bg-slate-100"
                            onClick={() => open()}>
                            <TbPhotoPlus size={50} />
                            <p>Agregar imagen</p>
                        </div>
                    </div>
                </>
            )}
        </CldUploadWidget>
    )
}