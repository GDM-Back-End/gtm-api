import { UserModel } from '@modules/users/models/user.model';
import { IUser } from '@core/interfaces/user.interface';

export class UserService {
  private userModel = UserModel;

  async getAllUsers(): Promise<IUser[]> {
    return this.userModel.find().exec();
  }

  async addUser(user: IUser): Promise<IUser> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
