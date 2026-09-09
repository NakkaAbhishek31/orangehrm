import { expect, type APIResponse } from "@playwright/test";

export type CollectionResponse<T = unknown> = {
  data: T[];
  meta?: Record<string, unknown>;
  rels?: unknown[];
};

/** Validates the common OrangeHRM collection response contract. */
export const expectJsonCollection = async <T = unknown>(
  response: APIResponse,
): Promise<CollectionResponse<T>> => {
  expect(response.ok(), await response.text()).toBeTruthy();
  expect(response.headers()["content-type"]).toContain("application/json");

  const body = (await response.json()) as CollectionResponse<T>;
  expect(Array.isArray(body.data)).toBeTruthy();
  return body;
};
