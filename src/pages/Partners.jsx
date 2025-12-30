import PageWrapper from "../components/layout/PageWrapper"
import StoryBlock from "../components/story/StoryBlock"

export default function Partners() {
  return (
    <PageWrapper>
       <div className="pt-24 max-w-4xl mx-auto text-center px-6 mb-16">
          <h2 className="text-4xl font-serif font-bold text-spirit-green mb-4">
            Walking the Journey Together
          </h2>
          <p className="text-gray-600">
            The Tabernacle of Moses Prayer and Fasting Center is grateful for every
            individual, family, and organization that has supported this vision.
          </p>
        </div>
      <StoryBlock title="Tribute" images={["/humanity_call_international.webp", "/humanity_calls_international2.webp"]}>
        <p className="font-semibold">
          HUMANITY CALLS INTERNATIONAL
        </p>
        <p>
          Thank you for the generous donation of funds toward materials for
          Phase 1 of construction. Your partnership laid the foundation for what
          is rising on Kyevaluki Mountain.
        </p>
      </StoryBlock>
    </PageWrapper>
  )
}
