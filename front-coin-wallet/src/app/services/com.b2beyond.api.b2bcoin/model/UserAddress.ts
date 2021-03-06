/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface UserAddress {
    pairPk?: models.UserAddressPK;

    userId?: string;

    address?: string;

    faucet?: boolean;

    faucetUser?: boolean;

    currency?: models.WalletCoin;

    name?: string;

    faucetUrl?: string;

    groupName?: string;

    paymentId?: string;

    balance?: models.AddressBalance;

    faucetPaidBalance?: models.AddressBalance;

    apiKeys?: models.ApiKeys;

    key?: models.UserAddressPK;

}
