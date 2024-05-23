import Image from "next/image";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/0149fa05-99a7-4804-b35a-602845c41ad2-scivus.jpeg",
  "https://utfs.io/f/d9cdcf0f-473e-438d-ba7f-8856ec7f6c08-vn1i99.png",
  "https://utfs.io/f/b2687026-7ace-4349-a6c4-bab9ad466024-mo5p9g.png",
  "https://utfs.io/f/ea3dcee7-324c-43a0-b7d7-1ece186c9170-79l4r0.jpg",
];
const mocImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mocImages, ...mocImages].map((image) => (
          <div
            key={image.id}
            className="flex h-48 w-40 justify-center align-middle"
          >
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
