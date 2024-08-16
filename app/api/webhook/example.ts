const example = {
  email: null,
  amount: 2000,
  paymentInfo: {
    id: "evt_3PoL7XIzKGctEDDW0Z8DVROm",
    object: "event",
    api_version: "2019-09-09",
    created: 1723795372,
    data: {
      object: {
        id: "ch_3PoL7XIzKGctEDDW0vqFhtf7",
        object: "charge",
        amount: 2000,
        amount_captured: 2000,
        amount_refunded: 0,
        application: null,
        application_fee: null,
        application_fee_amount: null,
        balance_transaction: "txn_3PoL7XIzKGctEDDW0oUPma39",
        billing_details: {
          address: {
            city: null,
            country: null,
            line1: null,
            line2: null,
            postal_code: null,
            state: null,
          },
          email: null,
          name: null,
          phone: null,
        },
        calculated_statement_descriptor: "MEDICINA ESTETICA EMS",
        captured: true,
        created: 1723795372,
        currency: "usd",
        customer: null,
        description: "(created by Stripe CLI)",
        destination: null,
        dispute: null,
        disputed: false,
        failure_balance_transaction: null,
        failure_code: null,
        failure_message: null,
        fraud_details: {},
        invoice: null,
        livemode: false,
        metadata: {},
        on_behalf_of: null,
        order: null,
        outcome: {
          network_status: "approved_by_network",
          reason: null,
          risk_level: "normal",
          risk_score: 33,
          seller_message: "Payment complete.",
          type: "authorized",
        },
        paid: true,
        payment_intent: "pi_3PoL7XIzKGctEDDW0hMJVCjf",
        payment_method: "pm_1PoL7XIzKGctEDDWiUPwjzED",
        payment_method_details: {
          card: {
            amount_authorized: 2000,
            authorization_code: null,
            brand: "visa",
            checks: {
              address_line1_check: null,
              address_postal_code_check: null,
              cvc_check: "pass",
            },
            country: "US",
            exp_month: 8,
            exp_year: 2025,
            extended_authorization: {
              status: "disabled",
            },
            fingerprint: "BNDpZQBR8Lq8gSoo",
            funding: "credit",
            incremental_authorization: {
              status: "unavailable",
            },
            installments: null,
            last4: "4242",
            mandate: null,
            multicapture: {
              status: "unavailable",
            },
            network: "visa",
            network_token: {
              used: false,
            },
            overcapture: {
              maximum_amount_capturable: 2000,
              status: "unavailable",
            },
            three_d_secure: null,
            wallet: null,
          },
          type: "card",
        },
        receipt_email: null,
        receipt_number: null,
        receipt_url:
          "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xRk9rRDJJektHY3RFRERXKKyP_LUGMgbOX8EmqfE6LBakztEkGxtZgcjiqBYSV-GO0ZXL4gEFXbZa-5H1R3QWM3cQe2_Cqxl11rFw",
        refunded: false,
        refunds: {
          object: "list",
          data: [],
          has_more: false,
          total_count: 0,
          url: "/v1/charges/ch_3PoL7XIzKGctEDDW0vqFhtf7/refunds",
        },
        review: null,
        shipping: {
          address: {
            city: "San Francisco",
            country: "US",
            line1: "510 Townsend St",
            line2: null,
            postal_code: "94103",
            state: "CA",
          },
          carrier: null,
          name: "Jenny Rosen",
          phone: null,
          tracking_number: null,
        },
        source: null,
        source_transfer: null,
        statement_descriptor: null,
        statement_descriptor_suffix: null,
        status: "succeeded",
        transfer_data: null,
        transfer_group: null,
      },
    },
    livemode: false,
    pending_webhooks: 2,
    request: {
      id: "req_zzxT2Sp5erZea8",
      idempotency_key: "1c029523-a13d-4325-8cbb-d765804bc243",
    },
    type: "charge.succeeded",
  },
  type: "charge.succeeded",
  time: "8/16/2024 8/16/2024",
  email2: null,
  url: "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xRk9rRDJJektHY3RFRERXKKyP_LUGMgbOX8EmqfE6LBakztEkGxtZgcjiqBYSV-GO0ZXL4gEFXbZa-5H1R3QWM3cQe2_Cqxl11rFw",
  paymentmethodDetails: {
    card: {
      amount_authorized: 2000,
      authorization_code: null,
      brand: "visa",
      checks: {
        address_line1_check: null,
        address_postal_code_check: null,
        cvc_check: "pass",
      },
      country: "US",
      exp_month: 8,
      exp_year: 2025,
      extended_authorization: {
        status: "disabled",
      },
      fingerprint: "BNDpZQBR8Lq8gSoo",
      funding: "credit",
      incremental_authorization: {
        status: "unavailable",
      },
      installments: null,
      last4: "4242",
      mandate: null,
      multicapture: {
        status: "unavailable",
      },
      network: "visa",
      network_token: {
        used: false,
      },
      overcapture: {
        maximum_amount_capturable: 2000,
        status: "unavailable",
      },
      three_d_secure: null,
      wallet: null,
    },
    type: "card",
  },
  billing_details: {
    address: {
      city: null,
      country: null,
      line1: null,
      line2: null,
      postal_code: null,
      state: null,
    },
    email: null,
    name: null,
    phone: null,
  },
  currency: "usd",
};
