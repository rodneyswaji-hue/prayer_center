import PageWrapper from "../components/layout/PageWrapper"
import StoryBlock from "../components/story/StoryBlock"

export default function Partners() {
  return (
    <PageWrapper>
      <StoryBlock title="Walking the Journey Together" image="/humanity_call_international.webp">
        <p>
          The Tabernacle of Moses Prayer and Fasting Center is grateful for every
          individual, family, and organization that has supported this vision.
        </p>
      </StoryBlock>

      <StoryBlock title="Tribute" image="/humanity_calls_international2.webp">
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
