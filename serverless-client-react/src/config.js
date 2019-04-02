const dev = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-api-prod-attachmentsbucket-x9ctfsuvr782"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL:    "https://xxx.amazonaws.com/prod"
  },
  cognito: {
    REGION:           "ap-southeast-1",
    USER_POOL_ID:     "ap-southeast-1_q8xB3iz96",
    APP_CLIENT_ID:    "xxx",
    IDENTITY_POOL_ID: "xxx"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_xxx",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "xxx-x9ctfsuvr782"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL:    "https://xxx.amazonaws.com/prod"
  },
  cognito: {
    REGION:           "ap-southeast-1",
    USER_POOL_ID:     "ap-southeast-1_q8xB3iz96",
    APP_CLIENT_ID:    "xxx",
    IDENTITY_POOL_ID: "xxx"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};