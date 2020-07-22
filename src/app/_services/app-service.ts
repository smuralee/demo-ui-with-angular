import {environment} from '../../environments/environment';

export class AppService {

  getEndpoint(resourceName: string): string {
    return environment.apiEndpoint + resourceName;
  }

}
