import { Property } from "@activepieces/pieces-framework"

export function isOfTypeObject(value: any): boolean {
  return typeof value === 'object'
}

export function baseUrlShortText() {
  return Property.ShortText({
    displayName: 'Base URL',
    description: 'Enter the base URL',
    required: true,
  })
}