import helmet from 'helmet';

const cspConfig = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", 'bimakavach.com'],
  },
};

export default function withCSP(handler) {
  return (req, res) => {
    helmet.contentSecurityPolicy(cspConfig)(req, res, () => {
      return handler(req, res);
    });
  };
}
