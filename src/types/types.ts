import { RouteComponentProps } from "react-router-dom";

export interface ICargo {
  type: string;
  description: string;
  volume: string;
}

interface IService {
  type: string;
  value?: string;
}

export interface IShipment {
  id: string;
  name: string;
  cargo: ICargo[];
  mode: string;
  type: string;
  destination: string;
  origin: string;
  services: IService[];
  total: string;
  status: string;
  userId: string;
}

export interface IReducerState {
  loading: boolean;
  error: boolean;
  shipments: Array<IShipment>;
  selectedShipment: IShipment;
}

export interface IReducerAction {
  type: string;
  data?: any;
  id?: string;
  shipment?: IShipment;
}

export interface IHomeProps {
  dispatch: React.Dispatch<any>;
  shipments: Array<IShipment>;
  loading: boolean;
}

export interface IHomeState {
  shipments: Array<any>;
  currentPage: number;
  shipmentsPerPage: number;
  searchKey: string;
  orderByKey: string;
  order: "asc" | "desc";
}

export interface IDetailsProps extends RouteComponentProps<{ id: string }> {
  selectedShipment: IShipment;
  loading: boolean;
  dispatch: React.Dispatch<any>;
}

export interface IDetailsState {
  showEditForm: boolean;
}

export interface ICargoDetailsProps {
  cargo: Array<ICargo>;
}

export interface IShipmentsListProps {
  loading: boolean;
  shipments: Array<IShipment>;
}

export interface IFiltersComponentProps {
  filterChanged: (key: string, value: string) => void;
}

export interface IPaginationProps {
  shipmentsPerPage: number;
  totalShipments: number;
  activePage: number;
  paginate: (name: number) => void;
}

export interface IEditNameComponentProps {
  shipment: IShipment;
  nameInput: any;
  changeName: () => void;
  cancel: () => void;
}

export interface IShipmentDetailsProps {
  shipment: IShipment;
}
