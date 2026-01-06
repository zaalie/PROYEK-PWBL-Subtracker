import { NextResponse } from "next/server";

export const apiResponse = {
  ok(data: unknown) {
    return NextResponse.json({ success: true, data }, { status: 200 });
  },

  created(data: unknown) {
    return NextResponse.json({ success: true, data }, { status: 201 });
  },

  badRequest(message: string) {
    return NextResponse.json(
      { success: false, message },
      { status: 400 }
    );
  },

  notFound(message = "Data not found") {
    return NextResponse.json(
      { success: false, message },
      { status: 404 }
    );
  },

  serverError(message = "Internal server error") {
    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  },
};
