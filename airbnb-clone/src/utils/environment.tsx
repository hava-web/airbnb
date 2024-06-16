import IEndpointConfiguration from '../models/endpoint.model';

let environment: IEndpointConfiguration | undefined = undefined;

if (Object.prototype.hasOwnProperty.call(window, '__endpoint')) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  environment = (window as { [key: string]: any })['__endpoint'] as IEndpointConfiguration;
}

console.log(environment);

export default environment;
