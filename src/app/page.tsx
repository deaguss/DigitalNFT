import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { buttonVariants, Button } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";


const perks = [
  {
    name: "Instant Devlivery",
    icon: ArrowDownToLine,
    description: "Get your NFTs instantly",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description: "Every NFT's assets are unique and untraceable",
  },
  {
    name: "For everyone",
    icon: Leaf,
    description: "All NFTs are free to use",
  }
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our marketplace for NFTs{" "}
            <span className="text-green-500">digital assets</span>
            .
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">welcome to DigitalNFT. Every NFT on this marketplace is unique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              NFT Trending
            </Link>
            <Button variant="ghost">
              Our NFT Collections &rarr;
            </Button>
          </div>
        </div>


        {/* list product */}
        <ProductReel
        query={{
          sort: 'desc',
          limit: 4
        }} 
        title="Our NFT Trending"
        href="/products"/>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                      {<perk.icon className="w-1/3 h-1/3"/>}
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">{perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      </>
  );
}
