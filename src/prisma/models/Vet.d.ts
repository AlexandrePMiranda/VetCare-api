import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VetModel = runtime.Types.Result.DefaultSelection<Prisma.$VetPayload>;
export type AggregateVet = {
    _count: VetCountAggregateOutputType | null;
    _min: VetMinAggregateOutputType | null;
    _max: VetMaxAggregateOutputType | null;
};
export type VetMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    crmv: string | null;
    cpf: string | null;
    userId: string | null;
};
export type VetMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    crmv: string | null;
    cpf: string | null;
    userId: string | null;
};
export type VetCountAggregateOutputType = {
    id: number;
    name: number;
    crmv: number;
    cpf: number;
    userId: number;
    _all: number;
};
export type VetMinAggregateInputType = {
    id?: true;
    name?: true;
    crmv?: true;
    cpf?: true;
    userId?: true;
};
export type VetMaxAggregateInputType = {
    id?: true;
    name?: true;
    crmv?: true;
    cpf?: true;
    userId?: true;
};
export type VetCountAggregateInputType = {
    id?: true;
    name?: true;
    crmv?: true;
    cpf?: true;
    userId?: true;
    _all?: true;
};
export type VetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VetWhereInput;
    orderBy?: Prisma.VetOrderByWithRelationInput | Prisma.VetOrderByWithRelationInput[];
    cursor?: Prisma.VetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VetCountAggregateInputType;
    _min?: VetMinAggregateInputType;
    _max?: VetMaxAggregateInputType;
};
export type GetVetAggregateType<T extends VetAggregateArgs> = {
    [P in keyof T & keyof AggregateVet]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVet[P]> : Prisma.GetScalarType<T[P], AggregateVet[P]>;
};
export type VetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VetWhereInput;
    orderBy?: Prisma.VetOrderByWithAggregationInput | Prisma.VetOrderByWithAggregationInput[];
    by: Prisma.VetScalarFieldEnum[] | Prisma.VetScalarFieldEnum;
    having?: Prisma.VetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VetCountAggregateInputType | true;
    _min?: VetMinAggregateInputType;
    _max?: VetMaxAggregateInputType;
};
export type VetGroupByOutputType = {
    id: string;
    name: string;
    crmv: string;
    cpf: string;
    userId: string;
    _count: VetCountAggregateOutputType | null;
    _min: VetMinAggregateOutputType | null;
    _max: VetMaxAggregateOutputType | null;
};
export type GetVetGroupByPayload<T extends VetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VetGroupByOutputType[P]>;
}>>;
export type VetWhereInput = {
    AND?: Prisma.VetWhereInput | Prisma.VetWhereInput[];
    OR?: Prisma.VetWhereInput[];
    NOT?: Prisma.VetWhereInput | Prisma.VetWhereInput[];
    id?: Prisma.StringFilter<"Vet"> | string;
    name?: Prisma.StringFilter<"Vet"> | string;
    crmv?: Prisma.StringFilter<"Vet"> | string;
    cpf?: Prisma.StringFilter<"Vet"> | string;
    userId?: Prisma.StringFilter<"Vet"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type VetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    crmv?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type VetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    crmv?: string;
    cpf?: string;
    userId?: string;
    AND?: Prisma.VetWhereInput | Prisma.VetWhereInput[];
    OR?: Prisma.VetWhereInput[];
    NOT?: Prisma.VetWhereInput | Prisma.VetWhereInput[];
    name?: Prisma.StringFilter<"Vet"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "crmv" | "cpf" | "userId">;
export type VetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    crmv?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.VetCountOrderByAggregateInput;
    _max?: Prisma.VetMaxOrderByAggregateInput;
    _min?: Prisma.VetMinOrderByAggregateInput;
};
export type VetScalarWhereWithAggregatesInput = {
    AND?: Prisma.VetScalarWhereWithAggregatesInput | Prisma.VetScalarWhereWithAggregatesInput[];
    OR?: Prisma.VetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VetScalarWhereWithAggregatesInput | Prisma.VetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Vet"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Vet"> | string;
    crmv?: Prisma.StringWithAggregatesFilter<"Vet"> | string;
    cpf?: Prisma.StringWithAggregatesFilter<"Vet"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Vet"> | string;
};
export type VetCreateInput = {
    id?: string;
    name: string;
    crmv: string;
    cpf: string;
    user: Prisma.UserCreateNestedOneWithoutVetsInput;
};
export type VetUncheckedCreateInput = {
    id?: string;
    name: string;
    crmv: string;
    cpf: string;
    userId: string;
};
export type VetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    crmv?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutVetsNestedInput;
};
export type VetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    crmv?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetCreateManyInput = {
    id?: string;
    name: string;
    crmv: string;
    cpf: string;
    userId: string;
};
export type VetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    crmv?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    crmv?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetNullableScalarRelationFilter = {
    is?: Prisma.VetWhereInput | null;
    isNot?: Prisma.VetWhereInput | null;
};
export type VetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    crmv?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type VetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    crmv?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type VetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    crmv?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type VetCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VetCreateWithoutUserInput, Prisma.VetUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VetCreateOrConnectWithoutUserInput;
    connect?: Prisma.VetWhereUniqueInput;
};
export type VetUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VetCreateWithoutUserInput, Prisma.VetUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VetCreateOrConnectWithoutUserInput;
    connect?: Prisma.VetWhereUniqueInput;
};
export type VetUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VetCreateWithoutUserInput, Prisma.VetUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VetCreateOrConnectWithoutUserInput;
    upsert?: Prisma.VetUpsertWithoutUserInput;
    disconnect?: Prisma.VetWhereInput | boolean;
    delete?: Prisma.VetWhereInput | boolean;
    connect?: Prisma.VetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VetUpdateToOneWithWhereWithoutUserInput, Prisma.VetUpdateWithoutUserInput>, Prisma.VetUncheckedUpdateWithoutUserInput>;
};
export type VetUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VetCreateWithoutUserInput, Prisma.VetUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VetCreateOrConnectWithoutUserInput;
    upsert?: Prisma.VetUpsertWithoutUserInput;
    disconnect?: Prisma.VetWhereInput | boolean;
    delete?: Prisma.VetWhereInput | boolean;
    connect?: Prisma.VetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VetUpdateToOneWithWhereWithoutUserInput, Prisma.VetUpdateWithoutUserInput>, Prisma.VetUncheckedUpdateWithoutUserInput>;
};
export type VetCreateWithoutUserInput = {
    id?: string;
    name: string;
    crmv: string;
    cpf: string;
};
export type VetUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    crmv: string;
    cpf: string;
};
export type VetCreateOrConnectWithoutUserInput = {
    where: Prisma.VetWhereUniqueInput;
    create: Prisma.XOR<Prisma.VetCreateWithoutUserInput, Prisma.VetUncheckedCreateWithoutUserInput>;
};
export type VetUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.VetUpdateWithoutUserInput, Prisma.VetUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.VetCreateWithoutUserInput, Prisma.VetUncheckedCreateWithoutUserInput>;
    where?: Prisma.VetWhereInput;
};
export type VetUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.VetWhereInput;
    data: Prisma.XOR<Prisma.VetUpdateWithoutUserInput, Prisma.VetUncheckedUpdateWithoutUserInput>;
};
export type VetUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    crmv?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    crmv?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    crmv?: boolean;
    cpf?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vet"]>;
export type VetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    crmv?: boolean;
    cpf?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vet"]>;
export type VetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    crmv?: boolean;
    cpf?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vet"]>;
export type VetSelectScalar = {
    id?: boolean;
    name?: boolean;
    crmv?: boolean;
    cpf?: boolean;
    userId?: boolean;
};
export type VetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "crmv" | "cpf" | "userId", ExtArgs["result"]["vet"]>;
export type VetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type VetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type VetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $VetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vet";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        crmv: string;
        cpf: string;
        userId: string;
    }, ExtArgs["result"]["vet"]>;
    composites: {};
};
export type VetGetPayload<S extends boolean | null | undefined | VetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VetPayload, S>;
export type VetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VetCountAggregateInputType | true;
};
export interface VetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vet'];
        meta: {
            name: 'Vet';
        };
    };
    findUnique<T extends VetFindUniqueArgs>(args: Prisma.SelectSubset<T, VetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VetFindFirstArgs>(args?: Prisma.SelectSubset<T, VetFindFirstArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VetFindManyArgs>(args?: Prisma.SelectSubset<T, VetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VetCreateArgs>(args: Prisma.SelectSubset<T, VetCreateArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VetCreateManyArgs>(args?: Prisma.SelectSubset<T, VetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VetDeleteArgs>(args: Prisma.SelectSubset<T, VetDeleteArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VetUpdateArgs>(args: Prisma.SelectSubset<T, VetUpdateArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VetDeleteManyArgs>(args?: Prisma.SelectSubset<T, VetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VetUpdateManyArgs>(args: Prisma.SelectSubset<T, VetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VetUpsertArgs>(args: Prisma.SelectSubset<T, VetUpsertArgs<ExtArgs>>): Prisma.Prisma__VetClient<runtime.Types.Result.GetResult<Prisma.$VetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VetCountArgs>(args?: Prisma.Subset<T, VetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VetCountAggregateOutputType> : number>;
    aggregate<T extends VetAggregateArgs>(args: Prisma.Subset<T, VetAggregateArgs>): Prisma.PrismaPromise<GetVetAggregateType<T>>;
    groupBy<T extends VetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VetGroupByArgs['orderBy'];
    } : {
        orderBy?: VetGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VetFieldRefs;
}
export interface Prisma__VetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VetFieldRefs {
    readonly id: Prisma.FieldRef<"Vet", 'String'>;
    readonly name: Prisma.FieldRef<"Vet", 'String'>;
    readonly crmv: Prisma.FieldRef<"Vet", 'String'>;
    readonly cpf: Prisma.FieldRef<"Vet", 'String'>;
    readonly userId: Prisma.FieldRef<"Vet", 'String'>;
}
export type VetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VetSelect<ExtArgs> | null;
    omit?: Prisma.VetOmit<ExtArgs> | null;
    include?: Prisma.VetInclude<ExtArgs> | null;
    where: Prisma.VetWhereUniqueInput;
};
export type VetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VetSelect<ExtArgs> | null;
    omit?: Prisma.VetOmit<ExtArgs> | null;
    include?: Prisma.VetInclude<ExtArgs> | null;
    where: Prisma.VetWhereUniqueInput;
};
export type VetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VetSelect<ExtArgs> | null;
    omit?: Prisma.VetOmit<ExtArgs> | null;
    include?: Prisma.VetInclude<ExtArgs> | null;
    where?: Prisma.VetWhereInput;
    orderBy?: Prisma.VetOrderByWithRelationInput | Prisma.VetOrderByWithRelationInput[];
    cursor?: Prisma.VetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VetScalarFieldEnum | Prisma.VetScalarFieldEnum[];
};
export type VetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VetSelect<ExtArgs> | null;
    omit?: Prisma.VetOmit<ExtArgs> | null;
    include?: Prisma.VetInclude<ExtArgs> | null;
    where?: Prisma.VetWhereInput;
    orderBy?: Prisma.VetOrderByWithRelationInput | Prisma.VetOrderByWithRelationInput[];
    cursor?: Prisma.VetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VetScalarFieldEnum | Prisma.VetScalarFieldEnum[];
};
export type VetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VetSelect<ExtArgs> | null;
    omit?: Prisma.VetOmit<ExtArgs> | null;
    include?: Prisma.VetInclude<ExtArgs> | null;
    where?: Prisma.VetWhereInput;
    orderBy?: Prisma.VetOrderByWithRelationInput | Prisma.VetOrderByWithRelationInput[];
    cursor?: Prisma.VetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VetScalarFieldEnum | Prisma.VetScalarFieldEnum[];
};
export type VetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VetSelect<ExtArgs> | null;
    omit?: Prisma.VetOmit<ExtArgs> | null;
    include?: Prisma.VetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VetCreateInput, Prisma.VetUncheckedCreateInput>;
};
export type VetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VetCreateManyInput | Prisma.VetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VetOmit<ExtArgs> | null;
    data: Prisma.VetCreateManyInput | Prisma.VetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VetSelect<ExtArgs> | null;
    omit?: Prisma.VetOmit<ExtArgs> | null;
    include?: Prisma.VetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VetUpdateInput, Prisma.VetUncheckedUpdateInput>;
    where: Prisma.VetWhereUniqueInput;
};
export type VetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VetUpdateManyMutationInput, Prisma.VetUncheckedUpdateManyInput>;
    where?: Prisma.VetWhereInput;
    limit?: number;
};
export type VetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VetUpdateManyMutationInput, Prisma.VetUncheckedUpdateManyInput>;
    where?: Prisma.VetWhereInput;
    limit?: number;
    include?: Prisma.VetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VetSelect<ExtArgs> | null;
    omit?: Prisma.VetOmit<ExtArgs> | null;
    include?: Prisma.VetInclude<ExtArgs> | null;
    where: Prisma.VetWhereUniqueInput;
    create: Prisma.XOR<Prisma.VetCreateInput, Prisma.VetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VetUpdateInput, Prisma.VetUncheckedUpdateInput>;
};
export type VetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VetSelect<ExtArgs> | null;
    omit?: Prisma.VetOmit<ExtArgs> | null;
    include?: Prisma.VetInclude<ExtArgs> | null;
    where: Prisma.VetWhereUniqueInput;
};
export type VetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VetWhereInput;
    limit?: number;
};
export type VetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VetSelect<ExtArgs> | null;
    omit?: Prisma.VetOmit<ExtArgs> | null;
    include?: Prisma.VetInclude<ExtArgs> | null;
};
