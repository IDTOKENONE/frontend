/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0
 *
 * The greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)
 */
export type Decimal = string;

export interface ConfigInfo {
  anchor_market: string;
  aust_token: string;
  community_fee: Decimal;
  controller: string;
  controller_fee: Decimal;
  deposit_fee: Decimal;
  gov_proxy?: string | null;
  nasset_rewards: string;
  nasset_token: string;
  nasset_vault: string;
  owner: string;
  pair_contract: string;
  platform: string;
  platform_fee: Decimal;
  reward_token: string;
  spectrum_gov: string;
  spectrum_token: string;
  ust_pair_contract: string;
  [k: string]: unknown;
}
