import type { Metadata } from "next"
import PrivacyPolicyPage from "@/components/pages/privacy-policy/PrivacyPolicyPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/privacy-policy")

export default function PrivacyPolicyLandingPage() {
  return <PrivacyPolicyPage />
}
